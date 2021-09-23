const mongoose = require('mongoose')
const users = require('./users')

const schema = new mongoose.Schema({
    name: String,
    users: [{
        ref: "users",
        type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('teams', schema)