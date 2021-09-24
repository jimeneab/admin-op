const accounts= require('../models/accounts')

module.exports = {

    async getAll(){
        let allAccounts = await accounts.find()
        return allAccounts
    },

    async createAccount(data){
        let { name, customerId, leaderId, teamId } = data
        let newAccount = await accounts.create({
            name,
            customerId,
            leaderId,
            teamId
        })
        return newAccount
    },

    async getAccountById(data){
        let id = data.params.id
        let account = await accounts.findById(id)
        return account
    },

    async updateAccount(data){
        let id = data.params.id
        let { name, customerId, leaderId, teamId } = data.body
        let updatedAccount =  await accounts.findByIdAndUpdate(id, {
            name,
            customerId,
            leaderId,
            teamId
        })
        return updatedAccount
    },

    async deleteAccount(data){
        let id = data.params.id
        let deletedAccount = await accounts.findByIdAndDelete(id)
        return deletedAccount
    }
}