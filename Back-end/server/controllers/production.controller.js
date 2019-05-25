const mongoose = require('mongoose');
const Production = mongoose.model('Production');

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).send({
        message: "Production content can not be empty"
      });
    }
    const production = await new Production(req.body);
    await production.save();
    return res.status(200).json({
      success: true,
      data: production
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Production."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const productions = await Production.find();
    return res.status(200).json({
      success: true,
      data: productions
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Production."
    });
  };
};


exports.update = async (req, res) => {
  try {
    const production = req.params.productionId;
    await Production.findOneAndUpdate(Production, req.body, { new: true }, (err, data) => {
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
        err.message || "Some error occurred while updating the Production."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const production = await Production.findByIdAndRemove(req.params.productionId);
    return res.status(200).json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Production not found with id " + req.params.productionId
      });
    }
    return res.status(500).send({
      message: "Could not delete Production with id " + req.params.productionId
    });
  }
};