module.exports = (app) => {
  const commentController = require('../controllers/comment.controller.js');
  app
    .route('/comments')
    .get(commentController.findAll)
    .post(commentController.create);
  app
    .route('/comments/:commentId')
    .put(commentController.update)
    .delete(commentController.delete);
}