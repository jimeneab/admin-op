const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    customerId:{
        ref: "customers",
        type: mongoose.Schema.Types.ObjectId
    },
    leaderId: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId
    },
    teamId: {
        ref: "teams",
        type: mongoose.Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('accounts', schema)