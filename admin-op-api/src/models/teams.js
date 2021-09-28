const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('teams', schema)