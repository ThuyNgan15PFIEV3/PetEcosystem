module.exports = (app) => {
  const productController = require('../controllers/product.controller.js');
  app
    .route('/products')
    .get(productController.findAll)
    .post(productController.create);
  app
    .route('/products/:productId')
    .get(productController.findOne)
    .put(productController.update)
    .delete(productController.delete);
}