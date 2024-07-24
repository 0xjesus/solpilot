import {Command, Flags} from '@oclif/core'
import {CustomOptions, DefaultContext, OptionFlag} from "@oclif/core/lib/interfaces/parser.js";
import * as fs from 'node:fs'
import * as path from 'node:path'
import prompts from 'prompts'
export default class SetConfig extends Command {
    static description = 'Set the network configuration to devnet, testnet, or mainnet'

    static examples = [
        '<%= config.bin %> <%= command.id %> --network devnet',
    ]

    static flags = {
        network: Flags.string({char: 'n', description: 'Network to set (devnet, testnet, mainnet)', required: false}),
    }

    async run() {
        const {flags} = await this.parse(SetConfig)

        // Prompt for network if not provided
        const network = flags.network ?? (await prompts({
            choices: [
                {title: 'devnet', value: 'devnet'},
                {title: 'testnet', value: 'testnet'},
                {title: 'mainnet', value: 'mainnet'},
            ],
            message: 'Select the network to set:',
            name: 'network',
            type: 'select',
        })).network

        // Define network URLs
        const networkUrls: { [key: string]: string } = {
            devnet: 'https://api.devnet.solana.com',
            mainnet: 'https://api.mainnet-beta.solana.com',
            testnet: 'https://api.testnet.solana.com',
        }

        // Ensure configuration directory exists
        const CONFIG_DIR = './wallets'
        const CONFIG_PATH = path.join(CONFIG_DIR, 'config.json')
        if (!fs.existsSync(CONFIG_DIR)) {
            fs.mkdirSync(CONFIG_DIR, {recursive: true})
        }

        // Create or update configuration file
        const config: {
            network: string
            networkType: ((context: DefaultContext<CustomOptions & OptionFlag<string | undefined, CustomOptions>>) => Promise<string | undefined>) | string;
            provider: string;
        } = {
            network: networkUrls[network],
            networkType: network,
            provider: 'default',
        }
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2))

        this.log(`Configuration set to ${network}`)
    }
}