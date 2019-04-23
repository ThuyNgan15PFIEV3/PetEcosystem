const Product = require("../models/product.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(404).send({
      message: "Product content can not be empty"
    });
  }

  const product = new Product(req.body);
  product
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

exports.findAll = (req, res) => {
  Product.find()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId
        });
      }
      res.send(product);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId
        });
      }
      return res.status(500).send({
        message: "Error retrieving Product with id " + req.params.productId
      });
    });
};

exports.update = (req,res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if(req.body._id){
        delete req.body._id;
      }

      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        product[key] = value;
      });
      product.save();
      res.send(product);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Product."
      });
    });;
}

exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
  .then(product => {
      if(!product) {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          });
      }
      res.send({message: "Product deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          });                
      }
      return res.status(500).send({
          message: "Could not delete Product with id " + req.params.productId
      });
  });
};