const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
import { JWTHelper } from '../helpers';

export default class UserController {
    login = async(req, res, next) => {
        try {
            let username = req.body.email;
            let password = req.body.password;
            if (username === undefined) {
                return res.status(400).json({
                    success: false,
                    error: "username id required filed"
                })
            }
            if (password === undefined) {
                return res.status(400).json({
                    success: false,
                    error: "password id required filed"
                })
            }
            const user = await User.findOne({
                username: username
            });
            if (!user) {
                return res.status(400).json({
                    success: false,
                    error: "user not found"
                })
            }
            const isValidPassword = await bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.status(400).json({
                    success: false,
                    error: "password is wrong"
                })
            }
            // Gen token
            const token = await JWTHelper.sign({
                id: user.id,
                username: user.username
            });

            res.render('homepage', { user: user });
            // return res.status(200).json({
            //     success: true,
            //     data: res.render('homepage', { title: 'Login' }, { Users: req.user })
            // });

        } catch (e) {
            console.log(e);
            return res.status(400).json({
                success: false,
                error: e.message
            })
        }
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
            if (await User.findOne({ username: newUser.username })) {
                console.log('Username is already taken!');
                return res.status(400).json({
                    success: false,
                    data: 'Username "' + newUser.username + '" is already taken'
                });
            }
            newUser.password = bcrypt.hashSync(newUser.password, 10);
            await User.create(newUser, function(err, data) {
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
            await User.findById(user, function(err, data) {
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
            await User.find({}, function(err, data) {
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
            await User.deleteOne({ _id: user }, function(err) {
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
            const updatedUser = await User.findOneAndUpdate(
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