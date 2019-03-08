const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config.json')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(config.MONGO, (err, data) => {
    if (!err) {
        console.log("Database connected")
    }
})

app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'dist/toDo')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/toDo/index.html'));
});


app.listen(config.PORT, (err, data) => {
    if (!err) {
        console.log("Server running on port " + config.PORT)
    }
})