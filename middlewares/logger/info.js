const colour = require('./colours')

module.exports = args => {
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  const httpVersion = `HTTP/${args.req.httpVersion}`
  const statusCode = args.res
    ? `${args.res.statusCode < 400 ? colour.green : colour.red}${args.res.statusCode}${colour.reset}`
    : `${args.err.statusCode < 400 ? colour.green : colour.red}${args.err.statusCode}${colour.reset}`
  const method = `${args.req.method}`
  const url = `${args.req.url}`
  const err = args.err
    && `${colour.red}${args.err.stack}${colour.reset}`
  return `\n${date} @ ${time} - ${httpVersion} - ${statusCode} ${method} => ${url}\n${err || ''}`
}
