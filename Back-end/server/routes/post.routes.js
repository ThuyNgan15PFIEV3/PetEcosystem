module.exports = (app) => {
    const postController = require('../controllers/post.controller.js');
    app
        .route('/post')
        .get(postController.findAll)
        .post(postController.create);

    app
        .route('/posts/:postId/comment')
        .get(postController.getAllComment)
        .post(postController.addComment);

    app
        .route('/posts/:postId')
        .get(postController.findOne)
        .put(postController.update)
        .delete(postController.delete);
}