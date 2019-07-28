import path from 'path'

const defaults = {
  linux: {
    root: path.join(
      '~',
      '.steam', 'steam',
      'steamapps',
      'common',
      'Source SDK Base 2013 Multiplayer'
    )
  }
}

const config = {
  folder: {
    root: () => defaults.linux.root,
    bin: () => path.join(config.folder.root(), 'bin')
  }
}

export default config
