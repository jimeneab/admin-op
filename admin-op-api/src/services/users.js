const users = require('../models/users')

module.exports = {

    async getAll(){
        let allUsers = await users.find()
        return allUsers
    },

    async createUser(data){
        let { name, email, role, password } = data
        let newUser = await users.create({
            name,
            email,
            role,
            password
        })
        return newUser
    },

    async getUserById(id){
        let user = await users.findById(id.id)
        return user
    },

    async updateUser(data){
        let id = data.params.id
        let{ name, email, role } = data
        let updatedUser = await users.findByIdAndUpdate(id,{
            name,
            email,
            role
        })
        return updatedUser
    },

    async deleteUser(data){
        let id = data.params.id
        let deletedUser = await users.findByIdAndDelete(id)
        return deletedUser
    }
}