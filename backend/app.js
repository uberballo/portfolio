const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
}


app.use('/api', routes)

module.exports = app