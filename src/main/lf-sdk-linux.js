import childProcess from 'child_process'

export default class LuminousFortsLinux {
  constructor ({ window }) {
    this._window = window
    this._webContents = window.webContents
  }

  shell ({ cwd, cmd }) {
    const fixedCwd = cwd.replace(/^~/, process.env.HOME)
    console.log(cmd)
    childProcess.exec('/bin/bash -C ' + cmd, {
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

  start ({ cwd, cmd }) {
    const fixedCwd = cwd.replace(/^~/, process.env.HOME)
    childProcess.exec('xdg-open ' + cmd, {
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

  wine ({ cwd, cmd }) {
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
