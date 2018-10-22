const { basePath, modifierFrequency } = require('../config')
const getLine = require('./get-line')

const getModifier = getLine(`${basePath}/text/MODIFIERS.txt`)

const useUpperCase = wordList => {
  const tmpList = Object.keys(wordList)
    .filter(([firstLetter]) => firstLetter >= 'A' && firstLetter <= 'Z')
  return tmpList[~~(Math.random() * tmpList.length)]
}

const generateText = ({
  sentences = 1, sentenceLength = 0, character,
}) => Promise.all(
  Array(sentences)
    .fill()
    .map(() => new Promise(resolve => (
      character
        .start(useUpperCase)
        .end(sentenceLength)
        .process(async (err, str) => {
          const hasModifier = Math.random() > (1 - modifierFrequency)
          if (hasModifier) {
            const modifier = await getModifier()
            return resolve(`${modifier} ${str}`)
          }
          return resolve(str)
        })))),
)

module.exports = generateText
