const teams = require('../models/teams')

module.exports = {
    async getAll(){
        let allTeams = await teams.find()
        return allTeams
    },

    async create(data){
        let { name, users } = data
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

    getById(data){
        let id = data.params.id
        let team = teams.findById(id)
        return team
    },

    delete(data){
        let id = data.params.id
        let deletedTeam = teams.findByIdAndDelete(id)
        return deletedTeam
    }
}