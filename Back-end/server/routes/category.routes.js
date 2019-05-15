module.exports = (app) => {
  const categoryController = require('../controllers/category.controller.js');
  app
    .route('/categories')
    .get(categoryController.findAll)
    .post(categoryController.create);
  app
    .route('/categorys/:categoryId')
    .get(categoryController.findOne)
    .put(categoryController.update)
    .delete(categoryController.delete);
}