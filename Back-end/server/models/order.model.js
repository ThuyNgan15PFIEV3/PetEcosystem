const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: 'User',
    require: true
  },
  storeId: {
    type: Schema.Types.ObjectId, ref: 'Store',
    require: true
  },
  productId: {
    type: Schema.Types.ObjectId, ref: 'Production',
    require: true
  },
  state: {
    type: String,
    enum: ['complete', 'destroy', 'process', 'wait']
  }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Order', OrderSchema);