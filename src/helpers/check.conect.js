const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECONDS = 5000

// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of connections:: ${numConnection}`)
}

// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    const numCore = os.cpus().length
    const memoryUsage = process.memoryUsage().rss

    // Maximum number of connections based on number osf cores
    const maxConnections = numCore * 5

    console.log(`Active connections:: ${numConnection}`)
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected`)
    }
  }, _SECONDS) // monitor every5 seconds
}

module.exports = {
  countConnect,
  checkOverLoad,
}
