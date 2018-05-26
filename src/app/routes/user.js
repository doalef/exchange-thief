import express from 'express';
let userRoute = express.Router();
import {create,login} from './../controllers/userController';
import * as Subscribe from './../controllers/subscriberController';
import jwt from 'jsonwebtoken';

let makeToken = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user._id,
        type: user.type,
        createdAt: user.createdAt
    },'voicemailvoicemailvoicemailbitchcheckyourline');
}

export default () => {

    // userRoute.route('/register')
    //     .post((req, res) => {
    //         const { email , password } = req.body;
    //         if (email && password) {
    //             create(email, password)
    //                 .then((value) => {
    //                     res.status(200).json({user: value.user,token: makeToken(value.user)});
    //                 }).catch((err) => {
    //                     res.status(err.status).json({err: err.error});
    //                 })
    //         } else {
    //             res.status(400).json({error: ''});
    //         }
    //     });

    // userRoute.route('/login')
    //     .post((req, res) => {
    //         const { email , password } = req.body;
    //         if (email , password) {
                
    //             login(email,password)
    //                 .then((value) => {
    //                     res.status(200).json({user: value.user, message: "logged in successfully",token: makeToken(value.user)})
    //                 }).catch((err) => {
    //                     res.status(err.status).json({})
    //                 })
    //         } else {
    //             res.status(400).json({});
    //         }
    //     });

    userRoute.route('/subscribe')
        .post((req,res) => {
            const { email } = req.body;
            if (email) {
                Subscribe.create(email)
                    .then((value) => {
                        res.status(200).json({subscriber: value});
                    }).catch((err) => {
                        res.status(500).json({})
                    })
            } else {
                res.status(400).json({})
            }
        })

    return userRoute;
}