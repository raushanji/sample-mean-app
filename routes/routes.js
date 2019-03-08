var express = require('express')
var app = express()
var tokenVerify = require('./tokenVerify')


var addPerson = require('./addPerson')
app.post('/addPerson', tokenVerify, addPerson)

var findPerson = require('./allPersons')
app.get('/allPersons', tokenVerify, findPerson)

var updatePerson = require('./updatePerson')
app.post('/updatePerson', tokenVerify, updatePerson)

var register = require('./register')
app.post('/register', register)

var login = require('./login')
app.post('/login', login)



module.exports = app