const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);