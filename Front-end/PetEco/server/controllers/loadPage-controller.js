const Users = require('../models/users-model');
const bcrypt = require('bcryptjs');
export default class LoadPageController {
    renderHomepage = async(req, res, next) => {
        res.render('homepage', { title: 'Homepage' });
    };
    renderLogin = async(req, res, next) => {
        res.render('login', { title: 'Login' });
    };
    renderPetCare = async(req, res, next) => {
        res.render('petCare', { title: 'Login' });
    };
    renderShop = async(req, res, next) => {
        res.render('shop', { title: 'Login' });
    };
    renderPetShop = async(req, res, next) => {
        res.render('petShop', { title: 'Login' });
    };
    renderGallery = async(req, res, next) => {
        res.render('gallery', { title: 'Login' });
    }
    renderService = async(req, res, next) => {
        res.render('service', { title: 'Login' });

    };



    createNewUser = async(req, res, next) => {
        try {
            const newUser = {
                'username': req.body.username,
                'password': req.body.password,
                'name': req.body.name,
                'role': req.body.role,
                'address': req.body.address
            };
            if (await Users.findOne({ username: newUser.username })) {
                console.log('Username is already taken!');
                return res.status(400).json({
                    success: false,
                    data: 'Username "' + newUser.username + '" is already taken'
                });
            }
            newUser.password = bcrypt.hashSync(newUser.password, 10);
            await Users.create(newUser, function(err, data) {
                if (err) {
                    console.log('ERROR:', err);
                }
                console.log('Created success!', data);
                return res.status(200).json({
                    success: true,
                    data: newUser
                });
            });

        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            })
        }
    };
    getUserById = async(req, res, next) => {
        try {
            const user = req.params.id;
            await Users.findById(user, function(err, data) {
                if (err) {
                    console.log('ERROR:', err);
                }
                return res.status(200).json({
                    success: true,
                    data: data
                });
            });
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            })
        }
    };
    getAllUser = async(req, res, next) => {
        try {
            await Users.find({}, function(err, data) {
                if (err) {
                    console.log('ERROR:', err);
                }
                return res.status(200).json({
                    success: true,
                    data: data
                });
            });
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            });
        }
    };
    deleteUser = async(req, res, next) => {
        try {
            const user = req.params.id;
            await Users.deleteOne({ _id: user }, function(err) {
                if (!err) {
                    return res.status(200).json({
                        success: true,
                        data: "Delete successful!"
                    });
                }
                console.log('ERROR:', err);
            });
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            });
        }
    }
    updateUser = async(req, res, next) => {
        try {
            const user = req.params.id;
            const { username, address, role, name, password } = req.body;
            const updatedUser = await Users.findOneAndUpdate(
                user, {
                    username,
                    address,
                    role,
                    name,
                    password: await bcrypt.hashSync(password, 10)
                }, { new: true },
                (err, data) => {
                    if (!err) {
                        return res.status(200).json({
                            success: true,
                            data: data
                        });
                    }
                    return res.status(400).json({
                        success: false,
                        data: err.message
                    });
                });

        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            });
        }
    };
}