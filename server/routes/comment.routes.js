module.exports = (app) => {
  const commentController = require('../controllers/comment.controller.js');
  app
    .route('/categories')
    .get(commentController.findAll)
    .post(commentController.create);
  app
    .route('/comments/:commentId')
    .put(commentController.update)
    .delete(commentController.delete);
}