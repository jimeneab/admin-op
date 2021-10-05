const app = require('./app')
require('./database')


app.listen(3001, () => {
    console.log('server is running in port 3001')
})

module.exports = app