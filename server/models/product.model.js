const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  detail: String,
  price: String,
  image: String,
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Product', ProductSchema);
