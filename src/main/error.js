export class NotImplementedError extends Error {
  constructor () {
    super()
    this.name = 'NotImplementedError'
    this.message = 'Not implemented'
  }
}
