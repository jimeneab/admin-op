const teams = require('../models/teams')

module.exports = {
    getAll(){
        return 'gettinf all teams'
    },

    create(data){
        return 'creating new team '
    },

    update(data){
        let id = data.params.id
        return 'update team by id'
    },

    getById(id){
        return 'gettin by id team'
    },

    delete(id){
        return 'deleting by  id team'
    }
}