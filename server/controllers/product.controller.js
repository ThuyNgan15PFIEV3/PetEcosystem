const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Category = mongoose.model('Category');
const Comment = mongoose.model('Comment');
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Product content can not be empty"
      });
    }
    const product = await new Product(req.body);
    await product.save();
    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Product."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      data: products
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Product."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(400).json({
        success: false,
        error: 'Product is not found'
      });
    }
    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Product not found with id " + req.params.productId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Product with id " + req.params.productId
    });
  }
};

exports.update = async (req, res) => {
  try {
    const product = req.params.productId;
    await Product.findOneAndUpdate(product, req.body, { new: true }, (err, data) => {
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
        err.message || "Some error occurred while updating the Product."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.productId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Product not found with id " + req.params.productId
      });
    }
    return res.status(500).send({
      message: "Could not delete Product with id " + req.params.productId
    });
  }
};

exports.addCategoryToProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const category = await Category.findById(req.body._id);
    if (product.categories.indexOf(category._id) === -1) {
      product.categories.push(category._id);
    } else {
      return res.json({
        success: false,
        data: "Already have this category"
      })
    }
    product.save();
    return res.status(200).json({
      success: true,
      data: product
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while add category to the Product."
    });
  }
}

exports.deleteCategoryOfProduct = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.findById(req.params.productId);
    const category = await Category.findById(req.body._id);
    product.categories.splice(product.categories.indexOf(category._id), 1);
    product.save();
    return res.status(200).json({
      success: true,
      data: product
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while add category to the Product."
    });
  }
}

exports.addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    const product = await Product.findById(req.params.productId);
    product.comments.push(comment._id);
    product.save();
    return res.status(200).json({
      success: true,
      data: product,
      belongToProduct: req.params.productId
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while add comment to the Product."
    });
  }
}

exports.getAllComment = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate('comments');
    return res.status(200).json({
      success: true,
      data: product
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while add comment to the Product."
    });
  }
}