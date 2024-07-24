import {Command, Flags} from '@oclif/core'
import {Connection, PublicKey} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'

const CONFIG_DIR = './wallets'
const CONFIG_PATH = path.join(CONFIG_DIR, 'config.json')

interface Config {
  network: string
}

export default class ListWallets extends Command {
  static description = 'List all wallets and their data'

  static examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/wallets>',
  ]

  static flags = {
    file: Flags.string({char: 'f', description: 'Path to the directory where wallets are saved', required: false}),
  }

  async run() {
    const {flags} = await this.parse(ListWallets)
    const file = flags.file ?? './wallets'

    // Ensure the directory exists
    if (!fs.existsSync(file)) {
      this.error(`Directory does not exist: ${file}`)
    }

    const files = fs.readdirSync(file).filter(f => f.startsWith('keypair_') && f.endsWith('.json'))

    if (files.length === 0) {
      this.log('No wallets found.')
      return
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

    for (const [index, f] of files.entries()) {
      const filePath = path.join(file, f)
      const keypairData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      const publicKey = new PublicKey(keypairData.publicKey)
      // eslint-disable-next-line no-await-in-loop
      const balance = await connection.getBalance(publicKey)
      const balanceInSOL = balance / 1e9

      this.log(`Wallet ${index + 1}: ${f}`)
      this.log(`Public Key: ${keypairData.publicKey}`)
      this.log(`Balance: ${balanceInSOL.toFixed(2)} SOL`)
    }
  }
}