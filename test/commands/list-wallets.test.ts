import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('list-wallets', () => {
  it('runs list-wallets cmd', async () => {
    const {stdout} = await runCommand('list-wallets')
    expect(stdout).to.contain('hello world')
  })

  it('runs list-wallets --name oclif', async () => {
    const {stdout} = await runCommand('list-wallets --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
