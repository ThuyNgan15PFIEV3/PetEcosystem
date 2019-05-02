const Product = require("../models/product.model.js");

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
    const product = await Product.findById(req.params.productId);
    if (req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      product[key] = value;
    });
    await product.save();
    return res.status(200).json({
      success: true,
      data: product
    });
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