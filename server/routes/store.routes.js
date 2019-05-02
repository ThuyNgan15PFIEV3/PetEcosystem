module.exports = (app) => {
  const storeController = require('../controllers/store.controller.js');
  app
    .route('/stores')
    .get(storeController.findAll)
    .post(storeController.create);
  app
    .route('/stores/:storeId')
    .get(storeController.findOne)
    .put(storeController.update)
    .delete(storeController.delete);
}