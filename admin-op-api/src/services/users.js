const users = require('../models/users')

module.exports = {

    getAll(){
        return 'get all users service'
    },

    createUser(){
        return 'creating user'
    },

    getUserById(id){
        return `Getting ${id} user`
    },

    updateUser(id, data){
        return `Update ${id} user with ${data} changes`
    },

    deleteUser(id){
        return `Deleting user ${id}`
    }
}