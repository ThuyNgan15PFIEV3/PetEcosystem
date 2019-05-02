const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
  name: String,
  address: String,
  description: String,
  linkFB: String,
  image: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, {
    timestaps: true
  });

module.exports = mongoose.model('Store', StoreSchema);