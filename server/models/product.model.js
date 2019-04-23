const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    detail: String,
    price: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
