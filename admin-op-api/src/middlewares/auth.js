const users = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt =  require(`jsonwebtoken`)
const secret = require('../config')

module.exports = {

    singIn(data){


        return 'sing in user'
    },

    async signUp(data){
        let { name, email, password, rol } = data

        const newUser = new users({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        })

        const token = jwt.sign({id: newUser._id},secret.SECRET, {
            expiresIn:86400
        })

        return token
    }
}