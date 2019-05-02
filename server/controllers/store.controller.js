const Store = require("../models/store.model.js");

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Store content can not be empty"
      });
    }
    const store = await new Store(req.body);
    await store.save();
    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Store."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const stores = await Store.find();
    return res.status(200).json({
      success: true,
      data: stores
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while finding stores."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const store = await Store.findById(req.params.storeId).populate('products');
    if (!store) {
      return res.status(400).json({
        success: false,
        error: 'Store is not found'
      });
    }
    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Store not found with id " + req.params.storetId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Store with id " + req.params.storeId
    });
  }
};

exports.update = async (req, res) => {
  try {
    const store = await Store.findById(req.params.storeId);
    if (req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      store[key] = value;
    });
    await store.save();
    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while updating the Store."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const store = await Store.findByIdAndRemove(req.params.storeId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Store not found with id " + req.params.productId
      });
    }
    return res.status(500).send({
      message: "Could not delete Store with id " + req.params.productId
    });
  }
};