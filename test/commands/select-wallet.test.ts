import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('select-wallet', () => {
  it('runs select-wallet cmd', async () => {
    const {stdout} = await runCommand('select-wallet')
    expect(stdout).to.contain('hello world')
  })

  it('runs select-wallet --name oclif', async () => {
    const {stdout} = await runCommand('select-wallet --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
