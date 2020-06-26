require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy : JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('*', (req,res) => 
{
    res.sendfile(join(__dirname, 'client' , 'build' , 'index.html'))
})

require('./config')
.then(() => app.listen(3001))
.catch(err => console.error(err))