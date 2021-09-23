const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    customer: String,
    leaderId: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId
    },
    teams: [{
        ref: "teams",
        type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('accounts', schema)