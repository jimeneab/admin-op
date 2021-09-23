const { json } = require('express');
const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.json('Poyecto de control de operaciones')
})
app.use('/accounts', require('./routes/accounts'))
app.use('/users', require('./routes/users'))

module.exports = app;