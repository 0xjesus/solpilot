import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('airdrop', () => {
  it('runs airdrop cmd', async () => {
    const {stdout} = await runCommand('airdrop')
    expect(stdout).to.contain('hello world')
  })

  it('runs airdrop --name oclif', async () => {
    const {stdout} = await runCommand('airdrop --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
