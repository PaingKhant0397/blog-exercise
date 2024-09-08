const express = require('express')
// const mongoose = require('mongoose')

const config = require('./utils/config')

// mongoose.set('strictQuery', true)

// console.log(`Connecting to ${config.MONGODB_URI}`)

// ** Connect to MongoDB 
// mongoose.connect(config.MONGODB_URI)
//   .then((result) => {
//     console.log('Connected to MongoDB')
//     console.log(result)
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB: ', error.message)
//   })

//** App */

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

module.exports = app 