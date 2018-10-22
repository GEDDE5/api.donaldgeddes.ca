/* eslint-disable */
const express    = require('express')
const server     = express()

const path       = require('path')

const cors       = require('cors')
const logger     = require('./middlewares/logger')

const routes     = require('./routes')
const rest       = require('./routes/rest')
/* eslint-enable */


server
  .use(cors())
  .use(logger())
  .use(express.static(path.join(__dirname, '/public')))
  .use('/v1/', routes)
  .use('/*', rest)

module.exports = server
