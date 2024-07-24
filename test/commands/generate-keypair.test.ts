import {runCommand} from '@oclif/test'
import {expect} from 'chai'
import * as fs from 'node:fs'
import * as path from 'node:path'
import {fileURLToPath} from 'node:url'

describe('Wallet Commands', () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const tmpDir = path.join(__dirname, 'tmp')

  before(() => {
    console.log('Setting up temporary directory...')
    if (fs.existsSync(tmpDir)) {
      console.log(`Directory already exists: ${tmpDir}`)
    } else {
      fs.mkdirSync(tmpDir)
      console.log(`Created directory: ${tmpDir}`)
    }
  })

  after(() => {
    console.log('Cleaning up temporary files...')
    const files = fs.readdirSync(tmpDir)
    for (const file of files) {
      const filePath = path.join(tmpDir, file)
      fs.unlinkSync(filePath)
      console.log(`Deleted file: ${filePath}`)
    }

    if (fs.existsSync(tmpDir)) {
      fs.rmdirSync(tmpDir)
      console.log(`Deleted directory: ${tmpDir}`)
    } else {
      console.log(`Directory does not exist: ${tmpDir}`)
    }
  })

  it('runs generate-keypair --file <path> multiple times', async () => {
    console.log('Running generate-keypair command...')
    await runCommand(`generate-keypair --file ${tmpDir}`)
    await runCommand(`generate-keypair --file ${tmpDir}`)
    await runCommand(`generate-keypair --file ${tmpDir}`)
    console.log('Commands executed successfully')

    console.log('Verifying keypair files existence...')
    const files = fs.readdirSync(tmpDir).filter(f => f.startsWith('keypair_') && f.endsWith('.json'))
    expect(files.length).to.equal(3)
    for (const [index, file] of files.entries()) {
      const filePath = path.join(tmpDir, file)
      const fileExists = fs.existsSync(filePath)
      console.log(`Keypair file ${index + 1} exists: ${fileExists}`)
      expect(fileExists).to.be.true

      console.log(`Reading and parsing keypair file ${index + 1}...`)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      console.log(`File content ${index + 1}:`, fileContent)
      const keypairData = JSON.parse(fileContent)
      console.log(`Parsed keypair data ${index + 1}:`, keypairData)

      console.log(`Validating keypair data ${index + 1}...`)
      const hasPublicKey = keypairData.publicKey && typeof keypairData.publicKey === 'string'
      const hasSecretKey = keypairData.secretKey && Array.isArray(keypairData.secretKey)
      console.log(`Has publicKey ${index + 1}: ${hasPublicKey}`)
      console.log(`Has secretKey ${index + 1}: ${hasSecretKey}`)
      expect(hasPublicKey).to.be.true
      expect(hasSecretKey).to.be.true
      console.log(`Keypair data ${index + 1} is valid`)
    }
  })

  it('runs select-wallet --file <path> --index 1', async () => {
    console.log('Running select-wallet command...')
    const {stdout} = await runCommand(`select-wallet --file ${tmpDir} --index 1`)
    console.log('Command executed successfully')
    console.log('Command output:', stdout)

    console.log('Checking command output...')
    expect(stdout).to.contain('Wallet 1 selected and saved as')
    console.log('Output contains the expected message')

    console.log('Verifying selected wallet file existence...')
    const selectedFilePath = path.join(tmpDir, 'selected_wallet.json')
    const fileExists = fs.existsSync(selectedFilePath)
    console.log(`Selected wallet file exists: ${fileExists}`)
    expect(fileExists).to.be.true
  })

  it('runs list-wallets --file <path>', async () => {
    console.log('Running list-wallets command...')
    const {stdout} = await runCommand(`list-wallets --file ${tmpDir}`)
    console.log('Command executed successfully')
    console.log('Command output:', stdout)

    console.log('Checking command output...')
    expect(stdout).to.contain('Wallet 1:')
    expect(stdout).to.contain('Wallet 2:')
    expect(stdout).to.contain('Wallet 3:')
    console.log('Output contains the expected messages')
  })

  it('runs show-private-key --file <path> --index 1', async () => {
    console.log('Running show-private-key command...')
    const {stdout} = await runCommand(`show-private-key --file ${tmpDir} --index 1`)
    console.log('Command executed successfully')
    console.log('Command output:', stdout)

    console.log('Checking command output...')
    expect(stdout).to.contain('Private Key for wallet 1:')
    console.log('Output contains the expected message')
  })
})