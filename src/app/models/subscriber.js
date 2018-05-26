import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let Subscriber = new Schema({
    email: {type: String, required: true,unique: true},
    createdAt: {type: Date, default: Date.now()}
});

export default mongoose.model('Subscriber',Subscriber);