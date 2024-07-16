const database = require('./database')
const server = require('./server')
// const constants = require('./constants')

module.exports = module.exports.default =  {
  mongodb: database.connections.mongodb,
  constants: require('./constants'),
  server: require('./server'),
}
