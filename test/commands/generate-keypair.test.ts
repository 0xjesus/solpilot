import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('generate-keypair', () => {
  it('runs generate-keypair cmd', async () => {
    const {stdout} = await runCommand('generate-keypair')
    expect(stdout).to.contain('hello world')
  })

  it('runs generate-keypair --name oclif', async () => {
    const {stdout} = await runCommand('generate-keypair --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
