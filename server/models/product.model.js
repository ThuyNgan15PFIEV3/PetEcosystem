const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require
  },
  detail: {
    type: String,
    require
  },
  price: {
    type: String,
    require
  },
  image: {
    type: String,
    require
  },
  categories:
    [{ type: Schema.Types.ObjectId, ref: 'Category', unique: true }],
  comments:
    [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
},
  {
    timestamps: true
  });

module.exports = mongoose.model('Product', ProductSchema);
