const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: unique
    },

    password: {
        type: String,
        rquired: true
    }
}, {timestamps: true})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);