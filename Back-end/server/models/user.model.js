
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        require: true,
        type: String
    },
    name: String,
    role: {
        type: String,
        enum: ['admin', 'normal', 'adminShop']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    address: String,

}, {
    timestamps: true
}, );

module.exports = mongoose.model('User', userSchema);