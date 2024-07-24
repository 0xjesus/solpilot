import {Command, Flags} from '@oclif/core'
import {Keypair} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class GenerateKeypair extends Command {
  static override description = 'Generate a Solana keypair and save it as one of the user\'s wallets'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/save/keypair.json>',
  ]

  static override flags = {
    file: Flags.string({char: 'f', description: 'Path to the directory to save the keypair', required: false}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(GenerateKeypair)
    const file = flags.file ?? process.cwd() + '/wallets'

    this.log('Generating keypair...')

    // Ensure the directory exists
    if (!fs.existsSync(file)) {
      fs.mkdirSync(file, { recursive: true })
      this.log(`Directory created: ${file}`)
    }

    // Generate the keypair
    const keypair = Keypair.generate()

    // Convert the keypair to JSON format
    const keypairJson = JSON.stringify({
      publicKey: keypair.publicKey.toBase58(),
      secretKey: [...keypair.secretKey],
    })

    // Determine the file path for the keypair
    const filePath = path.join(file, `keypair_${Date.now()}.json`)

    // Save the keypair to the specified file
    fs.writeFileSync(filePath, keypairJson, 'utf8')

    this.log(`Keypair generated and saved to: ${filePath}`)
  }
}