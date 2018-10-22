// eslint-disable-next-line
const config = require('config').get('META.PORT')
const { PORT } = require('config').get('META')
const server = require('./server').listen(PORT)

server.on(
  'listening',
  () => console.log(`Running on port: ${PORT}`),
)
