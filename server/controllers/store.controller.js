const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const Product = mongoose.model('Product');
const Comment = mongoose.model('Comment');
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
    const store = req.params.productId;
    await Store.findOneAndUpdate(store, req.body, { new: true }, (err, data) => {
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
        message: "Store not found with id " + req.params.storeId
      });
    }
    return res.status(500).send({
      message: "Could not delete Store with id " + req.params.storeId
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();
    const store = await Store.findById(req.params.storeId);
    await store.products.push(product._id);
    await store.save();
    return res.status(200).json({
      success: true,
      data: product,
      store: req.params.storeId,
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Product."
    });
  }
}

exports.addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    const store = await Store.findById(req.params.storeId);
    store.comments.push(comment._id);
    store.save();
    return res.status(200).json({
      success: true,
      data: store,
      belongToProduct: req.params.storeId
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
    const store = await Store.findById(req.params.storeId).populate('comments');
    return res.status(200).json({
      success: true,
      data: store
    })
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while add comment to the Product."
    });
  }
}