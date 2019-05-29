const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Order content can not be empty"
      });
    }
    const order = await new Order(req.body);
    await order.save();
    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Order."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'username')
      .populate('productId', 'name');;
    return res.status(200).json({
      success: true,
      data: orders
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Order."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(400).json({
        success: false,
        error: 'Order is not found'
      });
    }
    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Order not found with id " + req.params.orderId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Order with id " + req.params.orderId
    });
  }
};

exports.update = async (req, res) => {
  try {
    const order = req.params.orderId;
    await Order.findByIdAndUpdate(order, req.body, { new: true }, (err, data) => {
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
        err.message || "Some error occurred while updating the Order."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const order = await Order.findByIdAndRemove(req.params.orderId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Order not found with id " + req.params.orderId
      });
    }
    return res.status(500).send({
      message: "Could not delete Order with id " + req.params.orderId
    });
  }
};

exports.findOrderByUserId = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId })
      .populate('storeId', 'name')
      .populate('productId', ['name', 'price', 'image']);
    if (!order) {
      return res.status(400).json({
        success: false,
        error: 'Order is not found'
      });
    }
    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Order not found with id " + req.params.userId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Order with id " + req.params.userId
    });
  }
};