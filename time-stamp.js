const moment = require('moment')

module.exports = (req, res, next) => {
  const dayTime = moment().format('YYYY-MM-DD HH:mm:ss')
  console.log(`${dayTime} | ${req.method} from ${req.path}`)
  next()
}
