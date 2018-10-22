const { readFile } = require('./fns')

const transform = res => res.split('\n').filter(l => l)
const pickOne = directions => directions[~~(Math.random() * (directions.length - 1))]

module.exports = path => () => readFile(path)
  .then(transform)
  .then(pickOne)
