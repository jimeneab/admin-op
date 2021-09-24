const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.json('Poyecto de control de operaciones')
})

app.use('/auth', require('./routes/auth'))
app.use('/accounts', require('./routes/accounts'))
app.use('/users', require('./routes/users'))
app.use('/roles', require('./routes/roles'))


module.exports = app;