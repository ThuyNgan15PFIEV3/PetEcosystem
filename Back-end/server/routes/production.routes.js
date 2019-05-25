module.exports = (app) => {
  const productionController = require('../controllers/production.controller');
  app
    .route('/products')
    .get(productionController.findAll)
    .post(productionController.create);
  app
    .route('/products/:productionId')
    .put(productionController.update)
    .delete(productionController.delete);
}