const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  user: {
    // type: Schema.Types.ObjectId, ref: 'User',
    type: String,
    require
  },
  comment: {
    type: String,
    require
  },
  rating: {
    type: Number,
    require
  },
},
  {
    timestamps: true
  });

module.exports = mongoose.model('Comment', CommentSchema);
