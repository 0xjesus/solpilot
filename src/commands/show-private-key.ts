import {Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class ShowPrivateKey extends Command {
  static override description = 'Show the private key of a selected wallet'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/wallets> --index 1',
  ]

  static override flags = {
    file: Flags.string({char: 'f', description: 'Path to the directory where wallets are saved', required: true}),
    index: Flags.integer({char: 'i', description: 'Index of the wallet to show the private key for', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(ShowPrivateKey)
    const {file, index} = flags

    const files = fs.readdirSync(file).filter(f => f.startsWith('keypair_') && f.endsWith('.json'))

    if (index < 1 || index > files.length) {
      this.error(`Wallet at index ${index} does not exist.`)
    } else {
      const filePath = path.join(file, files[index - 1])
      const keypairData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      this.log(`Private Key for wallet ${index}: ${keypairData.secretKey}`)
    }
  }
}