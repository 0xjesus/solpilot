import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('send', () => {
  it('runs send cmd', async () => {
    const {stdout} = await runCommand('send')
    expect(stdout).to.contain('hello world')
  })

  it('runs send --name oclif', async () => {
    const {stdout} = await runCommand('send --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
