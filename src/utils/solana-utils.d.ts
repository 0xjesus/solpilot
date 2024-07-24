declare module '../utils/solana-utils' {
    export interface Config {
        network: string;
        networkType: 'custom' | 'devnet' | 'mainnet' | 'testnet';
        provider: string;
    }

    // eslint-disable-next-line unicorn/no-static-only-class
    export default class SolanaUtils {
        static ensureConfigExists(): Config;
        static getSolscanUrl(signature: string): string;
        static validateConfig(config: Config): boolean;
    }
}
