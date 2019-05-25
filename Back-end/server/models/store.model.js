const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StoreSchema = Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
  },
  typeOfStore: [{
    type: String,
    enum: ['training', 'vet', 'care', 'beauty', 'normal'],
    require: true
  }],
  linkFB: String,
  image: String,
  belongToUser: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Production' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
  });

module.exports = mongoose.model('Store', StoreSchema);