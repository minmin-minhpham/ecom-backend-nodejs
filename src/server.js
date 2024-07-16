require('dotenv').config()

const express = require('express')
const connectDB = require('./database/db.connect')
const { checkOverLoad } = require('./helpers/check.conect')
const app = express()

// app.use(compression()); Cài thêm compression
// app.use(helmet()); Dung helmet
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect_db
connectDB()
// checkOverLoad()

// = = = = = Demo = = = = =
app.get('/', (req, res) => {
  console.log(process.env.NODE_ENV)
  return res.send('123')
})
// = = = = = = = = = = = = =

// handling error

app.listen(8080, () => console.log('Server start post:: 8080'))
