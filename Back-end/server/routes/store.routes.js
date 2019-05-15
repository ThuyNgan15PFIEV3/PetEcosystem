module.exports = (app) => {
  const storeController = require('../controllers/store.controller.js');
  app
    .route('/stores')
    .get(storeController.findAll)
    .post(storeController.create);

  app
    .route('/stores/:storeId/comment')
    .get(storeController.getAllComment)
    .post(storeController.addComment);

  app
    .route('/stores/:storeId')
    .get(storeController.findOne)
    .post(storeController.addProduct)
    .put(storeController.update)
    .delete(storeController.delete);
}