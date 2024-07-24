import {Command, Flags} from '@oclif/core'
import {Connection, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'
// eslint-disable-next-line import/no-named-as-default
import prompts from 'prompts'

const CONFIG_DIR = './wallets'
const CONFIG_PATH = path.join(CONFIG_DIR, 'config.json')

interface Config {
    network: string
}

export default class Airdrop extends Command {
    static description = 'Request an airdrop to a provided Solana address'

    static examples = [
        '<%= config.bin %> <%= command.id %> --address <wallet_address> --amount <amount>',
    ]

    static flags = {
        address: Flags.string({char: 'a', description: 'Solana wallet address to receive the airdrop'}),
        amount: Flags.string({char: 'm', description: 'Amount of SOL to airdrop'}),
    }

    async run() {
        const {flags} = await this.parse(Airdrop)

        // Ensure configuration directory exists
        if (!fs.existsSync(CONFIG_DIR)) {
            fs.mkdirSync(CONFIG_DIR, {recursive: true})
        }

        // Ensure configuration file exists
        if (!fs.existsSync(CONFIG_PATH)) {
            const defaultConfig: Config = {network: 'https://api.devnet.solana.com'}
            fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2))
        }

        // Read configuration file
        const config: Config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))

        // Set up connection
        const connection = new Connection(config.network)

        // Prompt for address if not provided
        const address = flags.address ?? (await prompts({
            message: 'Enter the Solana wallet address to receive the airdrop:',
            name: 'address',
            type: 'text',
            validate: value => (PublicKey.isOnCurve(value) ? true : 'Invalid Solana address')
        })).address

        // Prompt for amount if not provided
        const amount = flags.amount ?? (await prompts({
            message: 'Enter the amount of SOL to airdrop:',
            name: 'amount',
            type: 'number',
            validate: value => value > 0 ? true : 'Amount must be greater than 0'
        })).amount

        // Convert amount to lamports
        const lamports = amount * LAMPORTS_PER_SOL

        // Request airdrop
        try {
            const publicKey = new PublicKey(address)
            const signature = await connection.requestAirdrop(publicKey, lamports)
            await connection.confirmTransaction(signature)
            this.log(`Airdropped ${amount} SOL to ${address}`)
        } catch (error) {
            this.error(`Failed to airdrop SOL: ${error.message}`)
        }
    }
}