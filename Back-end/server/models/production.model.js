const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductionSchema = mongoose.Schema({

  name: {
    type: String,
    require
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]

},
  {
    timestamps: true
  });

module.exports = mongoose.model('Production', ProductionSchema);
