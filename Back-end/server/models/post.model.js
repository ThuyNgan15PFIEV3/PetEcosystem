const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = Schema({
    content: {
        type: String,
        require: true
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    image: String,
    belongToUser: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);