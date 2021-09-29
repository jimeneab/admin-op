const teams = require('../models/teams')

module.exports = {
    async getAll(){
        let allTeams = await teams.find()
        return allTeams
    },

    async create(data){
        let { name, users } = data.body
        let newTeam = teams.create({
            name,
            users
        })
        return newTeam
    },

    async update(data){
        let id = data.params.id
        let updatedTeam = await teams.findByIdAndUpdate(id)
        return updatedTeam
    },

    async getById(data){
        let id = data.params.id
        let team = await teams.findById(id)
        return team
    },

    async delete(data){
        let id = data.params.id
        let deletedTeam = await teams.findByIdAndDelete(id)
        return deletedTeam
    }
}