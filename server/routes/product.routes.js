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

  app
    .route('/products/:productId/comment')
    .get(productController.getAllComment)
    .post(productController.addComment);

  app
    .route('/products/:productId/category')
    .post(productController.addCategoryToProduct)
    .delete(productController.deleteCategoryOfProduct);
}