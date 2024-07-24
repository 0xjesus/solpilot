import {Command, Flags} from '@oclif/core'
import {Connection, PublicKey} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'

import SolanaUtils from '../utils/solana-utils.js'

export default class ListSelectedWallet extends Command {
  static description = 'List the details of the selected wallet';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ];

  static flags = {
    file: Flags.string({ char: 'f', description: 'Path to the directory where the selected wallet is saved', required: false }),
  };

  async run() {
    const { flags } = await this.parse(ListSelectedWallet);
    const file = flags.file ?? './wallets';
    const selectedWalletPath = path.join(file, 'selected_wallet.json');

    // Ensure the selected wallet file exists
    if (!fs.existsSync(selectedWalletPath)) {
      this.error(`Selected wallet file does not exist: ${selectedWalletPath}`);
    }

    // Ensure configuration exists and is valid
    const config = SolanaUtils.ensureConfigExists()
    if (!SolanaUtils.validateConfig(config)) {
      this.error('Invalid configuration file.')
    }

    // Set up connection
    const connection = new Connection(config.network)

    // Read selected wallet file
    const keypairData = JSON.parse(fs.readFileSync(selectedWalletPath, 'utf8'));
    const publicKey = new PublicKey(keypairData.publicKey);

    // Fetch balance
    const balance = await connection.getBalance(publicKey);
    const balanceInSOL = balance / 1e9;

    this.log(`Selected Wallet Details:`);
    this.log(`Public Key: ${publicKey.toBase58()}`);
    this.log(`Balance: ${balanceInSOL.toFixed(2)} SOL`);
    this.log(`Secret Key: [REDACTED]`); // Do not log the secret key for security reasons
  }
}