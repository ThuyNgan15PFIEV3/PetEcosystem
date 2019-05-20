'use strict';

import { loadPageController } from '../controllers';

module.exports = (app) => {
    app.route('/')
        .get(loadPageController.renderHomepage);
    app.route('/login')
        .get(loadPageController.renderLogin);
    app.route('/petCare')
        .get(loadPageController.renderPetCare);
    app.route('/petShop')
        .get(loadPageController.renderPetShop);
    app.route('/gallery')
        .get(loadPageController.renderGallery);
    app.route('/service')
        .get(loadPageController.renderService);
    app.route('/shop')
        .get(loadPageController.renderShop);


}