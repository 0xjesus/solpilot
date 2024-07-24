import * as fs from 'node:fs'
import * as path from 'node:path'

interface Config {
    network: string
    networkType: 'custom' | 'devnet' | 'mainnet' | 'testnet'
    provider: string
}

const CONFIG_DIR = './wallets'
const CONFIG_PATH = path.join(CONFIG_DIR, 'config.json')

// eslint-disable-next-line unicorn/no-static-only-class
export default class SolanaUtils {
    static ensureConfigExists(): Config {
        // Ensure configuration directory exists
        if (!fs.existsSync(CONFIG_DIR)) {
            fs.mkdirSync(CONFIG_DIR, {recursive: true})
        }

        // Ensure configuration file exists
        if (!fs.existsSync(CONFIG_PATH)) {
            const defaultConfig: Config = {
                network: 'https://api.devnet.solana.com',
                networkType: 'devnet',
                provider: 'default'
            }
            fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2))
        }
        // if not create it pointing to devnet
        else {
            const config: Config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))
            if (!config.networkType) {
                config.networkType = 'devnet'
                config.provider = 'default'
                config.network = 'https://api.devnet.solana.com'
                fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2))
            }
        }

        // Read and return configuration file
        return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))
    }

    static getSolscanUrl(signature: string): string {
        const config = this.ensureConfigExists()

        let baseUrl: string
        switch (config.networkType) {
            case 'devnet': {
                baseUrl = 'https://solscan.io/tx'
                break
            }

            case 'mainnet': {
                baseUrl = 'https://solscan.io/tx'
                break
            }

            case 'testnet': {
                baseUrl = 'https://solscan.io/tx'
                break
            }

            default: {
                throw new Error('Unsupported network type for Solscan URL generation')
            }
        }

        const networkParam = config.networkType === 'mainnet' ? '' : `?cluster=${config.networkType}`
        return `${baseUrl}/${signature}${networkParam}`
    }

    static validateConfig(config: Config): boolean {
        const validNetworkTypes = ['devnet', 'mainnet', 'testnet', 'custom']
        return (
            typeof config.network === 'string' &&
            typeof config.provider === 'string' &&
            validNetworkTypes.includes(config.networkType)
        )
    }
}