const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: {
        products: [{ type: mongoose.Schema.ObjectId, required: true, ref: 'Product' }],
        amount: { type: Number, required: true },
        total: { type: Number, required: true },
    },
    client: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        postCode: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String },
        email: { type: String, required: true },
    },
});

module.exports = mongoose.model('Order', orderSchema);