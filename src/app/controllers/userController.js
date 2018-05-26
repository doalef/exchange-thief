import User from './../models/user';
import Promise from 'bluebird';
export let create = (email, password) => {

    return new Promise(async (resolve, reject) => {
        try {
            let alreadyExists = await User.findOne({
                email: email
            }).lean();
            console.log(alreadyExists)
            if (alreadyExists) {
                reject({
                    status: 401,
                    success: false,
                    error: 'a user already exists with the given information'
                })
            } else {
                let newUser = new User({
                    email: email,
                    password: password
                });
                newUser.save();
                resolve({
                    user: newUser,
                    status: 200
                });
            }
        } catch (error) {
            reject({
                status: 500,
                error: ''
            })
        }

    })
}

export let login = (email, password) => {
    return new Promise( async (resolve,reject) => {
        try {
            let user = await User.findOne({email: email, password: password}).lean();
            if (user) {
                resolve({status: 200, user: user});
            } else {
                reject({status: 401,error: ''});
            }
        } catch (error) {
            reject({status: 500, error: ""})
        }
    })
}