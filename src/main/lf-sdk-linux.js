import childProcess from 'child_process'

export default class LuminousFortsLinux {
  constructor ({ window }) {
    this._window = window
    this._webContents = window.webContents
  }

  open ({ cwd, cmd }) {
    const fixedCwd = cwd.replace(/^~/, process.env.HOME)
    childProcess.exec('wine ' + cmd, {
      cwd: fixedCwd,
      shell: true
    }, (err, stdout, stderr) => {
      this._webContents.send('stdout', stdout)
      this._webContents.send('stderr', stderr)
      console.log(stdout)
      console.error(stderr)
      if (err) {
        console.error({ cwd }, err)
      }
    })
  }
}
