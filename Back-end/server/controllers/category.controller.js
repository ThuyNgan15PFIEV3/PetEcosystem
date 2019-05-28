const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Category content can not be empty"
      });
    }
    const category = await new Category(req.body);
    await category.save();
    return res.status(200).json({
      success: true,
      data: category
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Category."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      success: true,
      data: categories
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Category."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const category = await Category.findById(req.params.CategoryId);
    if (!category) {
      return res.status(400).json({
        success: false,
        error: 'Category is not found'
      });
    }
    return res.status(200).json({
      success: true,
      data: category
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Category not found with id " + req.params.CategoryId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Category with id " + req.params.CategoryId
    });
  }
};

exports.update = async (req, res) => {
  try {
    const category = req.params.CategoryId;
    await Category.findByIdAndUpdate(category, req.body, { new: true }, (err, data) => {
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
        err.message || "Some error occurred while updating the Category."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.categoryId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Category not found with id " + req.params.categoryId
      });
    }
    return res.status(500).send({
      message: "Could not delete Category with id " + req.params.categoryId
    });
  }
};