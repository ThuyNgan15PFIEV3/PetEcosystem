module.exports = (app) => {
  const orderController = require('../controllers/order.controller');
  app
    .route('/orders')
    .get(orderController.findAll)
    .post(orderController.create);
  app
    .route('/orders/:orderId')
    .get(orderController.findOne)
    .put(orderController.update)
    .delete(orderController.delete);

  app
    .route('/orders/detail/:userId')
    .get(orderController.findOrderByUserId);
}