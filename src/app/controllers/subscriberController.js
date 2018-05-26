import Subscriber from './../models/subscriber';

export let create = (email) => {
    return new Promise( async (resolve,reject) => {
        try {
            let subs = new Subscriber({
                email
            });
            subs.save();
            resolve(subs);
        } catch (error) {
            reject(error.message);
        }
    })
}

export let get = () => {
    return new Promise(async (resolve,reject) => {
        try {
            let subscribers = await Subscriber.find().lean();
            resolve(subscribers);
        } catch (error) {
            reject(error.message);
        }
    })
}