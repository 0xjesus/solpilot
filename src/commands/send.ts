import {Command, Flags} from '@oclif/core'
import {Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'
import prompts from 'prompts'

import SolanaUtils from '../utils/solana-utils.ts'

export default class Send extends Command {
    static description = 'Send SOL to a specified address'

    static examples = [
        '<%= config.bin %> <%= command.id %> --to <to_wallet> --amount <amount>',
    ]

    static flags = {
        amount: Flags.string({char: 'a', description: 'Amount of SOL to send', required: false}),
        to: Flags.string({char: 't', description: 'Recipient Solana wallet address', required: false}),
    }

    async run() {
        const {flags} = await this.parse(Send)

        // Ensure configuration exists and is valid
        const config = SolanaUtils.ensureConfigExists()
        if (!SolanaUtils.validateConfig(config)) {
            this.error('Invalid configuration file.')
        }

        // Set up connection
        const connection = new Connection(config.network)

        // Ensure the selected wallet file exists
        const selectedWalletPath = path.join('./wallets', 'selected_wallet.json')
        if (!fs.existsSync(selectedWalletPath)) {
            this.error(`Selected wallet file does not exist: ${selectedWalletPath}`)
        }

        // Read selected wallet file
        const selectedWalletData = JSON.parse(fs.readFileSync(selectedWalletPath, 'utf8'))
        const fromWallet = Keypair.fromSecretKey(Uint8Array.from(selectedWalletData.secretKey))

        // Prompt for recipient address if not provided
        const toAddress = flags.to ?? (await prompts({
            message: 'Enter the recipient Solana wallet address:',
            name: 'to',
            type: 'text',
            validate: value => PublicKey.isOnCurve(value) ? true : 'Invalid Solana address'
        })).to

        // Prompt for amount if not provided
        const amount = flags.amount ?? (await prompts({
            message: 'Enter the amount of SOL to send:',
            name: 'amount',
            type: 'number',
            validate: value => value > 0 ? true : 'Amount must be greater than 0'
        })).amount

        // Convert amount to lamports
        const lamports = amount * LAMPORTS_PER_SOL

        // Create transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromWallet.publicKey,
                lamports,
                toPubkey: new PublicKey(toAddress),
            })
        )

        // Send transaction
        try {
            const signature = await connection.sendTransaction(transaction, [fromWallet])
            await connection.confirmTransaction(signature, 'finalized')
            this.log(`Transaction successful with signature: ${signature}`)
            const solscanUrl = SolanaUtils.getSolscanUrl(signature)
            this.log(`View the transaction on Solscan: ${solscanUrl}`)
        } catch (error) {
            if (error instanceof Error) {
                this.error(`Failed to send SOL: ${error.message}`)
            } else {
                this.error('An unknown error occurred during the transaction.')
            }
        }
    }
}