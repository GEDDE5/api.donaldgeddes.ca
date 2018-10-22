const ENV = process.env.NODE_ENV || 'development'
const { version } = require('../package.json')

module.exports = {
  META: {
    ENV,
    PORT: 4000,
    VERSION: version,
  },
}
