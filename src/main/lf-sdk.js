
import LuminousFortsWindows from './lf-sdk-windows'
import LuminousFortsLinux from './lf-sdk-linux'

const isWindows = (process.platform === 'win32')

function create (params) {
  if (isWindows) {
    return new LuminousFortsWindows(params)
  } else {
    return new LuminousFortsLinux(params)
  }
}

export default create
