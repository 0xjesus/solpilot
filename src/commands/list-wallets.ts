import {Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class ListWallets extends Command {
  static override description = 'List all wallets and their data'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/wallets>',
  ]

  static override flags = {
    file: Flags.string({char: 'f', description: 'Path to the directory where wallets are saved', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(ListWallets)
    const {file} = flags

    const files = fs.readdirSync(file).filter(f => f.startsWith('keypair_') && f.endsWith('.json'))

    files.forEach((f, index) => {
      const filePath = path.join(file, f)
      const keypairData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      this.log(`Wallet ${index + 1}: ${f}`)
      this.log(`Public Key: ${keypairData.publicKey}`)
      this.log(`Secret Key: [REDACTED]`)
    })
  }
}