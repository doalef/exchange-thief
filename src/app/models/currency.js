import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CurrencySchema = new Schema({
    name: {type: String, required: true},
    value: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()}
});

export default mongoose.model('Currency', CurrencySchema);