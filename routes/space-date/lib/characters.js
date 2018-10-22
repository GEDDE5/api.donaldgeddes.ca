const { MarkovChain } = require('markovchain')

const { basePath } = require('./config')

module.exports = [
  {
    name: 'JENNY',
    markov: new MarkovChain({ files: `${basePath}/text/JENNY.txt` }),
  },
  {
    name: 'TIM',
    markov: new MarkovChain({ files: `${basePath}/text/TIM.txt` }),
  },
]
