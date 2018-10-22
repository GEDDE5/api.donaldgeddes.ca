const { basePath, directionFrequency } = require('./config')
const characters = require('./characters')
const generateLine = require('./utils/generate-line')
const getLine = require('./utils/get-line')

const getDirection = getLine(`${basePath}/text/directions.txt`)

class SpaceDate {
  constructor(lines) {
    this.lines = lines || (5 + ~~(Math.random() * 10))
    this.directions = []
    this.hasDirection = () => Math.random() > (1 - directionFrequency)
  }

  static prepare(line) {
    if (line.join().split(' ').length <= 4) {
      return `${line.join()}... `
    }
    return line.join()
  }

  async generate() {
    return Promise.all(
      Array(this.lines)
        .fill()
        .map(async () => {
          const lines = await Promise.all(
            characters.map(async ({ name, markov }) => (
              `${name}: ${await generateLine({ character: markov })}`
            )),
          )

          let direction
          if (this.hasDirection()) {
            const untilUnique = async d => (
              !this.directions.includes(d)
                ? d
                : untilUnique(await getDirection())
            )

            direction = await untilUnique(await getDirection())
            this.directions.push(direction)
          } else {
            direction = null
          }

          return { direction, lines }
        }),
    )
  }
}
module.exports = SpaceDate
