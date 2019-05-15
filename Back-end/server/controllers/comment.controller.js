const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Comment content can not be empty"
      });
    }
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(200).json({
      success: true,
      data: comment
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Comment."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json({
      success: true,
      data: comments
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Comment."
    });
  };
};


exports.update = async (req, res) => {
  try {
    const comment = req.params.commentId;
    await Comment.findOneAndUpdate(comment, req.body, { new: true }, (err, data) => {
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
      message:
        err.message || "Some error occurred while updating the Comment."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.commentId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Comment not found with id " + req.params.commentId
      });
    }
    return res.status(500).send({
      message: "Could not delete Comment with id " + req.params.commentId
    });
  }
};