const accounts= require('../models/accounts')

module.exports = {

    getAll(){
        return 'Get all accounts services'
    },

    createAccount(){
        return 'Creting a new account'
    },

    getAccountById(id){
        return ` getting ${id} account`
    },

    updateAccount(id){
        return `Account ${id} is updating`
    },

    deleteAccount(id){
        return `Deleting ${id} account`
    }
}