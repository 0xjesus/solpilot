import {Command, Flags} from '@oclif/core'
import {Keypair} from '@solana/web3.js'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class GenerateKeypair extends Command {
  static override description = 'Generate one or more Solana keypairs and save them as the user\'s wallets'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --file <path/to/save/keypair.json> --count 3',
  ]

  static override flags = {
    count: Flags.integer({char: 'c', default: 1, description: 'Number of keypairs to generate'}),
    file: Flags.string({char: 'f', description: 'Path to the directory to save the keypairs', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(GenerateKeypair)
    const {count, file} = flags

    console.log(`Generating ${count} keypair(s)...`)

    for (let i = 0; i < count; i++) {
      // Generate the keypair
      const keypair = Keypair.generate()

      // Convert the keypair to JSON format
      const keypairJson = JSON.stringify({
        publicKey: keypair.publicKey.toBase58(),
        secretKey: [...keypair.secretKey],
      })

      // Determine the file path for each keypair
      const filePath = path.join(file, `keypair_${i + 1}.json`)

      // Save the keypair to the specified file
      fs.writeFileSync(filePath, keypairJson, 'utf8')

      console.log(`Keypair ${i + 1} generated and saved to: ${filePath}`)
    }
  }
}