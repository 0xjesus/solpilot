import {Command, Flags} from '@oclif/core'
import {execSync} from 'node:child_process'
// eslint-disable-next-line import/no-named-as-default
import prompts from 'prompts'

import SolanaUtils from '../utils/solana-utils.ts'

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

        // Ensure configuration exists and is valid
        const config = SolanaUtils.ensureConfigExists()
        if (!SolanaUtils.validateConfig(config)) {
            this.error('Invalid configuration file.')
        }

        // Prompt for address if not provided
        const address = flags.address ?? (await prompts({
            message: 'Enter the Solana wallet address to receive the airdrop:',
            name: 'address',
            type: 'text',
            validate: value => value.length === 44 ? true : 'Invalid Solana address'
        })).address

        // Prompt for amount if not provided
        const amount = flags.amount ?? (await prompts({
            message: 'Enter the amount of SOL to airdrop:',
            name: 'amount',
            type: 'number',
            validate: value => value > 0 ? true : 'Amount must be greater than 0'
        })).amount

        try {
            // Execute Solana CLI airdrop command
            const result = execSync(`solana airdrop ${amount} ${address} --url ${config.network}`).toString()
            this.log(result)

            // Extract the transaction signature from the result
            const signatureMatch = result.match(/Signature: (\w+)/)
            if (signatureMatch) {
                const signature = signatureMatch[1]
                const solscanUrl = SolanaUtils.getSolscanUrl(signature)
                this.log(`View the transaction on Solscan: ${solscanUrl}`)
            } else {
                this.error('Failed to extract transaction signature from the CLI output.')
            }
        } catch (error) {
            if (error instanceof Error) {
                this.error(`Failed to airdrop SOL: ${error.message}`)
            } else {
                this.error('An unknown error occurred during the airdrop request.')
            }
        }
    }
}