import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('show-private-key', () => {
  it('runs show-private-key cmd', async () => {
    const {stdout} = await runCommand('show-private-key')
    expect(stdout).to.contain('hello world')
  })

  it('runs show-private-key --name oclif', async () => {
    const {stdout} = await runCommand('show-private-key --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
