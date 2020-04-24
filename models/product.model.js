const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    description: { type: String, required: true },
    category: { type: String },
    notes: { type: String },
    amount: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);