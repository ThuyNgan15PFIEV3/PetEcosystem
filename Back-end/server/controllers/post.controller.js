const mongoose = require('mongoose');
const User = mongoose.model('User');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

exports.create = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(404).send({
                message: "Post content can not be empty"
            });
        }
        const post = await new Post(req.body);
        await post.save();
        return res.status(200).json({
            success: true,
            data: post
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while creating the Store."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({
            success: true,
            data: posts
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while finding stores."
        });
    };
};

exports.findOne = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate({ path: 'comments', populate: { path: 'userId' } }).populate('belongToUser');

        if (!post) {
            return res.status(400).json({
                success: false,
                error: 'Post is not found'
            });
        }
        return res.status(200).json({
            success: true,
            data: post,
        });
    } catch (err) {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Post not found with id " + req.params.posttId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Store with id " + req.params.postId
        });
    }
};

exports.update = async (req, res) => {
    try {
        const post = req.params.postId;
        await Post.findOneAndUpdate(post, req.body, { new: true }, (err, data) => {
            if (err) return res.status(400).json({
                success: false,
                error: err.message
            });
            return res.status(200).json({
                success: true,
                data: data
            });
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while updating the Store."
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.postId);
        return res.status(200).json({
            success: true,
            data: true
        })
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.storeId
            });
        }
        return res.status(500).send({
            message: "Could not delete Store with id " + req.params.storeId
        });
    }
};

exports.addComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        await comment.save();
        const post = await Post.findById(req.params.postId);
        post.comments.push(comment._id);
        post.save();
        return res.status(200).json({
            success: true,
            data: post,
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while add comment to the Product."
        });
    }
}

exports.getAllComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('comments');
        return res.status(200).json({
            success: true,
            data: post
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while add comment to the Product."
        });
    }
}