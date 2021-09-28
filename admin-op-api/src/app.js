const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
    origin:'http://localhost:3000',
    optionSuccessstatus: 200
}

app.get('/api', cors(corsOptions), (req,res) => {
    res.json('Poyecto de control de operaciones')
})

app.use('/auth', require('./routes/auth'))
app.use('/teams', require('./routes/teams'))
app.use('/accounts', require('./routes/accounts'))
app.use('/users', require('./routes/users'))
app.use('/roles', require('./routes/roles'))


module.exports = app;