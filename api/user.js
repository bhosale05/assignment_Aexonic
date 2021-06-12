const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Users = require('../model/user');
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken');
jwtkey = 'jwt';

// login Api
router.post('/login', (req, res) => {
    Users.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            console.log(`error : no user with email : ${req.body.email}`);
            res.status(404).json(`error : no user with email : ${req.body.email}`);
        }
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, match) => {

                if (err) {
                    console.log(`error : ${error}`);
                    res.status(400).json(`error : ${error}`);
                }
                if (!match) {
                    console.log(`error : ${err}`);
                    res.status(500).json(`incorrect passowrd, Please Enter correct Passowrd`);
                }
                if (match) {
                    jwt.sign({ user }, jwtkey, { expiresIn: '500s' }, (err, token) => {
                        if (err) {
                            res.status(400).json({ err });
                        } else {
                            console.log(`login successfully for ${JSON.stringify(user)}`);
                            res.status(200).json({
                                success: `login successfully`,
                                token: token,
                                data: user
                            })
                        }
                    })
                }
            })
        }
        if (err) {
            console.log(`error : ${error}`);
            res.status(400).json(`error : ${error}`);
        }
    })
})

// register new user API 
router.post('/registration', async (req, res) => {
    let data = req.body;
    let password = data.password;
    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;

    if (data.first_name) {
        data = validate(data);
        if (data.error) {
            res.status(500).json({ error: data.error });
            return;
        } else {
            data = data.data;
        }

        Users.collection.insertOne(data, (error, result) => {
            if (error) {
                console.log(`error : ${error}`);
                res.status(400).json(`error : ${error}`);
            } else {
                // create json web token with expaire time 5 sec
                jwt.sign({ result }, jwtkey, { expiresIn: '500s' }, (err, token) => {
                    if (err) {
                        res.status(400).json({ err });
                    } else {
                        console.log(`User records Insert for ${JSON.stringify(data)}`);
                        res.status(200).json({
                            success: `User record Insert successfully`,
                            token: token,
                            result: data
                        })
                    }
                })
            }
        })
    } else {
        console.error(`Please check the payload. Payload is empty`);
        res.status(500).json({ error: `Please check the payload. Payload is empty` });
    }

})

//update user by id API
router.put('/:id', async (req, res) => {
    let updatedData = req.body;
    if (updatedData.password) {
        let salt = await bcrypt.genSalt(saltRounds);
        let hashedPassword = await bcrypt.hash(updatedData.password, salt);
        updatedData.password = hashedPassword;
    }
    let id = req.params.id;
    Users.findByIdAndUpdate({ _id: id }, updatedData, (err, result) => {
        if (err) {
            console.log(`error : ${err}`);
            res.status(400).json({
                msg: `error occures at the time of update user record by id : ${id}`,
                error: err
            })
        } else {
            console.log(`User record update successfully for id : ${id}`);
            res.status(200).json({
                success: `User record update Successfully for id : ${id}`,
                updatedData: updatedData
            })
        }
    })
})

// get all users with pagination API 
router.get('/', tokenVerify, (req, res) => {
    let limit = +req.query.limit;
    let skip = +req.query.skip;
    if (limit) {
        Users.find((error, result) => {
            if (error) {
                console.log(`error : ${error}`);
                res.status(400).json({ error: error })
            } else {
                console.log(`get users with limit : ${limit}`)
                res.status(200).json({
                    success: `get users with limit : ${limit}`,
                    result: result
                });
            }
        }).limit(limit).skip(skip)
    } else {
        Users.find((error, result) => {
            if (error) {
                console.log(`error : ${error}`);
                res.status(400).json({ error: error })
            } else {
                console.log(`get all users`)
                res.status(200).json({
                    success: `get all users`,
                    result: result
                });
            }
        })
    }
})

// search api
router.get('/search/:first_name', tokenVerify, (req, res) => {

        let reg = new RegExp(req.params.first_name, 'i');

        Users.find({ first_name: reg})
        .then((result) => {
            console.log(`get users : ${result} `)
                res.status(200).json({result : result});
        })
        .catch((error) =>{
            console.log(`error : ${error}`);
            res.status(400).json({ error: error })
        })
})

// verify json web token for fetch records from db
function tokenVerify(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        // verify token passed by headers 
        jwt.verify(req.token, jwtkey, (err, authData) => {
            if (err) {
                res.status(500).json({ error: err })
            } else {
                next();
            }
        })
    } else {
        res.status(400).json(`Invalid token...`);
    }
}

// validate data send by payload
function validate(data) {
    let error = null;
    const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // name validation
    if (typeof data.first_name != 'string') {
        error = `First Name is not String for ${JSON.stringify(data)}`;
    } else {
        if (typeof data.last_name != 'string') {
            error = `Last Name is not String for ${JSON.stringify(data)}`;
        } else {
            // phone_number Validation
            if (!mobileRegex.test(data.mobile)) {
                error = `mobile number is incorrect for ${JSON.stringify(data)}`;
            } else {
                // email validation
                if (!emailRegex.test(data.email)) {
                    error = `email is incorrect for ${JSON.stringify(data)}`;
                } else {
                    if (typeof data.password != 'string') {
                        error = `password is incorrect for ${JSON.stringify(data)}`;
                    } else {
                        if (typeof data.address != 'string') {
                            error = `address is incorrect for ${JSON.stringify(data)}`;
                        }
                    }
                }
            }
        }
    }
    if (error) {
        return { error: error };

    } else {

        return { data: data };
    }
    return error;
}


module.exports = router
