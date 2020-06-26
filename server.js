require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy : JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

require('./config')
.then(() => app.listen(3001))
.catch(err => console.error(err))