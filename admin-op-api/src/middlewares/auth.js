const users = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt =  require(`jsonwebtoken`)
const secret = require('../config')

module.exports = {

   async singIn(data){
        let { email, password } = data
        const userFound = await users.findOne({ email })
        
        if(!userFound) return false

        if(userFound.password != password) return false
        
        return true
    },

    async signUp(data){
        let { name, email, role, password } = data
        let newUser = await users.create({
            name,
            email,
            role,
            password
        })
        return newUser
    }
}