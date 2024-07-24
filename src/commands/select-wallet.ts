import {Command, Flags} from '@oclif/core'
import {Connection, PublicKey} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'
import prompts from 'prompts'

import SolanaUtils from '../utils/solana-utils.js'

export default class SelectWallet extends Command {
  static description = 'Select a wallet to use';

  static examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/wallets>',
  ];

  static flags = {
    file: Flags.string({ char: 'f', description: 'Path to the directory where wallets are saved', required: false }),
  };

  async run() {
    const { flags } = await this.parse(SelectWallet);
    const file = flags.file ?? './wallets';

    // Ensure configuration exists and is valid
    const config = SolanaUtils.ensureConfigExists()
    if (!SolanaUtils.validateConfig(config)) {
      this.error('Invalid configuration file.')
    }

    // Set up connection
    const connection = new Connection(config.network)

    // Ensure the directory exists
    if (!fs.existsSync(file)) {
      this.error(`Directory does not exist: ${file}`);
    }

    const files = fs.readdirSync(file).filter(f => f.startsWith('keypair_') && f.endsWith('.json'));

    if (files.length === 0) {
      this.log('No wallets found.');
      return;
    }

    const wallets = await Promise.all(files.map(async (f) => {
      const filePath = path.join(file, f);
      const keypairData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const publicKey = new PublicKey(keypairData.publicKey);
      const balance = await connection.getBalance(publicKey);
      return {
        title: `Wallet ${publicKey.toBase58()}: ${f} - Balance: ${(balance / 1e9).toFixed(2)} SOL`,
        value: filePath,
      };
    }));

    const response = await prompts({
      choices: wallets,
      message: 'Select a wallet to use:',
      name: 'selectedWallet',
      type: 'select',
    });

    if (response.selectedWallet) {
      fs.writeFileSync(path.join(file, 'selected_wallet.json'), fs.readFileSync(response.selectedWallet));
      this.log(`Wallet selected and saved as 'selected_wallet.json'`);
    } else {
      this.log('No wallet selected.');
    }
  }
}