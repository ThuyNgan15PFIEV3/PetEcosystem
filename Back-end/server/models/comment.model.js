const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: 'User',
    require
  },
  comment: {
    type: String,
    require
  },
  rating: {
    type: Number,
  },
},
  {
    timestamps: true
  });

module.exports = mongoose.model('Comment', CommentSchema);
