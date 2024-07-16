const mongoose = require('mongoose')
const { mongodb } = require('../config')

module.exports = module.exports.default = () => {
  const uri =
    mongodb.uri ||
    `mongodb://${mongodb.username}:${mongodb.password}@${mongodb.host}:${mongodb.port}/${mongodb.database}/?authSource=admin`

  const db = mongoose.createConnection(uri, {
    ...mongodb.options,
  })

  db.on('error', console.error.bind(console, 'MongoDB Connection Error:: '))
  db.on('open', () => {
    console.log('MongoDB Connection okkk !!!')
  })

  return db
}
