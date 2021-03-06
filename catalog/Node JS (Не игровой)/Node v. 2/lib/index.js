const methods = require('./methods')
const api = require('./api')
const { callExecute } = require('./utils')

class VkBot {
  constructor(settings) {
    if (!settings) {
      throw new Error('You must pass token into settings')
    } else if (typeof settings === 'object' && !settings.token) {
      throw new Error('You must set token param in settings')
    } else if (typeof settings === 'object' && !settings.group_id) {
      throw new Error('You must set group_id param in settings')
    }

    this.longPollParams = null
    this.middlewares = []
    this.methods = []
    this.settings = Object.assign({}, {
      polling_timeout: 25,
      execute_timeout: 50,
    }, typeof settings === 'object' ? settings : { token: settings })

    Object.entries({ ...methods, api, callExecute }).forEach(([key, method]) => {
      this[key] = method.bind(this)
    })

    setInterval(() => {
      this.callExecute(this.methods)
      this.methods = []
    }, settings.execute_timeout || 50)
  }

  use(middleware) {
    this.use(middleware)
  }

  command(triggers, ...middlewares) {
    this.command(triggers, ...middlewares)
  }

  event(triggers, ...middlewares) {
    this.command(triggers, ...middlewares)
  }

  on(...middlewares) {
    this.command([], ...middlewares)
  }

  next(ctx, idx) {
    return this.next(ctx, idx)
  }

  sendMessage(userId, ...args) {
    this.sendMessage(userId, ...args)
  }

  startPolling(callback) {
    return this.startPolling(callback)
  }
}

module.exports = VkBot
