import childProcess from 'child_process'
import { folder } from './config'

const tools = [{
  id: 'start_game',
  cmd: [
    './hl2.sh',
    '-game sourcetest -steam -secure',
    '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
  ].join(' '),
  cwd: folder.root,
  launcher: 'shell'
}, {
  id: 'start_game_dev',
  cmd: [
    './hl2.sh',
    '-game sourcetest -steam -secure',
    '-console -dev -allowdebug +developer 1',
    '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
  ].join(' '),
  cwd: folder.root,
  launcher: 'shell'
}, {
  id: 'start_game_dev_windowed',
  cmd: [
    './hl2.sh',
    '-game sourcetest -steam -secure',
    '-console -dev -allowdebug +developer 1 -sw -w 800 -h 600',
    '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
  ].join(' '),
  cwd: folder.root,
  launcher: 'shell'
}, {
  cmd: '~/.local/share/Steam/steamapps/sourcemods/luminousforts',
  cwd: folder.root,
  launcher: 'start'
}, {
  id: 'hammer',
  cmd: 'hammer.exe',
  cwd: folder.wineBin,
  launcher: 'wine'
}, {
  id: 'hlmv',
  cmd: 'hlmv.exe',
  cwd: folder.wineBin,
  launcher: 'wine'
}, {
  id: 'qc_eyes',
  cmd: 'qc_eyes.exe',
  cwd: folder.wineBin,
  launcher: 'wine'
}, {
  id: 'edit_gameconfig',
  cmd: 'GameConfig.txt',
  cwd: folder.bin,
  launcher: 'start'
}, {
  id: 'start_game_particle',
  cmd: [
    './hl2.sh',
    '-game sourcetest',
    '-steam -secure',
    '-sw -console -tools -nop4 -w 1920 -h 1080 +sv_lan 0',
    '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
  ].join(' '),
  cwd: folder.root,
  launcher: 'shell'
}, {
  id: 'commit_log',
  cmd: 'https://github.com/hekar/luminousforts-2013/commits/master',
  cwd: '.',
  launcher: 'start'
}, {
  id: 'documentation',
  cmd: 'https://hekar.github.io/luminousforts-website/doc/',
  cwd: '.',
  launcher: 'start'
}, {
  id: 'website',
  cmd: 'https://hekar.github.io/luminousforts-website/',
  cwd: '.',
  launcher: 'start'
}, {
  id: 'valve_wiki',
  cmd: 'https://developer.valvesoftware.com/wiki/SDK_Docs',
  cwd: '.',
  launcher: 'start'
}]

function findToolById (id) {
  const tool = tools
    .filter(tool => tool.id === id)
  if (tool.length > 0) {
    return tool[0]
  } else {
    console.error('Could not find tool', id)
  }
}

export default class LuminousFortsLinux {
  constructor ({ window }) {
    this._window = window
    this._webContents = window.webContents
  }

  openTool (id) {
    const tool = findToolById(id)
    if (tool) {
      const { cwd, cmd, launcher } = tool
      this[launcher]({ cwd, cmd })
    }
  }

  cmd ({ cwd, cmd }) {
    const fixedCwd = cwd.replace(/~\//, process.env.HOME + '/')
    console.log('Executing:', cmd, 'in', fixedCwd)
    return new Promise((resolve, reject) => {
      childProcess.exec(cmd, {
        cwd: fixedCwd,
        shell: true,
        env: {
          'WINEDEBUG': '-all',
          'LD_LIBRARY_PATH': `${folder.bin}:${process.env.LD_LIBRARY_PATH}`
        }
      }, (err, stdout, stderr) => {
        if (err) {
          console.error({ cwd }, err)
        }
        this._webContents.send('stdout', stdout)
        this._webContents.send('stderr', stderr)
        console.log(stdout)
        console.error(stderr)
        resolve({ stdout, stderr })
      })
    })
  }

  localShell ({ cwd, cmd }) {
    return this.cmd({
      cwd: cwd || folder.bin,
      cmd
    })
  }

  shell ({ cwd, cmd }) {
    return this.cmd({
      cwd: cwd || folder.bin,
      cmd: '/bin/bash -C ' + cmd
    })
  }

  start ({ cwd, cmd }) {
    return this.cmd({
      cwd,
      cmd: 'xdg-open ' + cmd
    })
  }

  wine ({ cwd, cmd }) {
    return this.cmd({
      cwd: cwd || folder.wineBin,
      cmd: 'wine ' + cmd
    })
  }
}
