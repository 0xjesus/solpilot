import {Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import * as path from 'node:path'
// eslint-disable-next-line import/no-named-as-default
import prompts from 'prompts'

export default class ShowPrivateKey extends Command {
  static description = 'Show the private key of a selected wallet'

  static examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/wallets>',
  ]

  static flags = {
    file: Flags.string({ char: 'f', description: 'Path to the directory where wallets are saved', required: false }),
  };

  async run() {
    const { flags } = await this.parse(ShowPrivateKey);
    const file = flags.file ?? './wallets';

    // Ensure the directory exists
    if (!fs.existsSync(file)) {
      this.error(`Directory does not exist: ${file}`);
    }

    const files = fs.readdirSync(file).filter(f => f.startsWith('keypair_') && f.endsWith('.json'));

    if (files.length === 0) {
      this.log('No wallets found.');
      return;
    }

    const wallets = files.map((f, index) => {
      const filePath = path.join(file, f);
      const keypairData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return {
        secretKey: keypairData.secretKey,
        title: `Wallet ${index + 1}: ${f}`,
        value: filePath,
      };
    });

    const response = await prompts({
      choices: wallets,
      message: 'Select a wallet to show the private key:',
      name: 'selectedWallet',
      type: 'select',
    });

    if (response.selectedWallet) {
      const selectedWallet = wallets.find(wallet => wallet.value === response.selectedWallet);
      this.log(`Private Key for selected wallet: ${selectedWallet?.secretKey}`);
    } else {
      this.log('No wallet selected.');
    }
  }
}