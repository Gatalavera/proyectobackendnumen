const express = require('express')
const app = express()
const logger = require("morgan")
require('dotenv').config()
const indexRouter = require('./routes/index')
const {conect} = require("./db/db")
app.use(logger('dev'))
app.use(express.json())
conect()

app.use('/', indexRouter)

module.exports = app