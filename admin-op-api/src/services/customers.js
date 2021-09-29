const customers = require('../models/customers')

module.exports = {

    async getAll(){
        let allUsers = await customers.find()
        return allUsers
    },

    async create(data){
        let { name } = data.body
        let newCustomer = customers.create({ name })
        return newCustomer
    },

    async getById(data){
        let id = data.params.id
        let customer = await customers.findById(id)
        return customer
    },

    async update(data){
        let id = data.params.id
        let updatedcustomer = await customers.findByIdAndUpdate(id)
        return updatedcustomer
    },
    async delete(data){
        let id = data.params.id
        let deletedCustomer = customers.findByIdAndDelete(id)
        return deletedCustomer
    }
}