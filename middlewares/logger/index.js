const reqInfo = require('./info')
const reqBody = require('./body')

const logger = errMode => {
  if (!errMode) {
    return (req, res, next) => {
      const args = { req, res }
      console.log(reqInfo(args) + reqBody(req._body, req.body))
      next()
    }
  }
  return (err, req, res, next) => {
    const args = { err, req }
    console.error(reqInfo(args))
    res.json({ error: err.message })
    next()
  }
}

module.exports = logger
