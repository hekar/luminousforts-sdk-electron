import path from 'path'

const defaults = {
  linux: {
    root: path.join(
      process.env.HOME,
      '.steam', 'steam',
      'steamapps',
      'common',
      'Source SDK Base 2013 Multiplayer'
    ),
    wineRoot: path.join(
      process.env.HOME,
      '.steam', 'steam',
      'steamapps',
      'common',
      'Source SDK Base 2013 Singleplayer'
    )
  }
}

export const folder = {
  root: defaults.linux.root,
  bin: path.join(defaults.linux.root, 'bin'),
  wineRoot: defaults.linux.wineRoot,
  wineBin: path.join(defaults.linux.wineRoot, 'bin')
}

const config = {
  folder
}

export default config
