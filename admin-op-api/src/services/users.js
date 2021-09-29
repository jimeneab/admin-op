const users = require('../models/users')

module.exports = {

    async getAll(){
        let allUsers = await users.find()
        return allUsers
    },

    async getUserById(id){
        let user = await users.findById(id.id)
        return user
    },

    async updateUser(data){
        let id = data.params.id
        let{ name, english, technologies, cv } = data.body
        let options = {
            ...name && { name },
            ...english && { english },
            ...technologies && { technologies },
            ...cv && { cv }
        }
        let updatedUser = await users.findByIdAndUpdate(id, options)
        return updatedUser
    },

    async deleteUser(data){
        let id = data.params.id
        let deletedUser = await users.findByIdAndDelete(id)
        return deletedUser
    }
}