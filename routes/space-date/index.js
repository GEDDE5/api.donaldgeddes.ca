const express = require('express')
const SpaceDate = require('./lib')

const router = express.Router()

router.get('/space-date', async (req, res) => {
  const date = new SpaceDate()
  console.log(await date.generate())
  res.json(await date.generate())
})

module.exports = router
