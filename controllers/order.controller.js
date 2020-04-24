const Order = require('../models/order.model');
const Product = require('../models/product.model');
const sanitize = require('mongo-sanitize');

exports.saveOrder = async (req, res) => {
    console.log('req.body', req.body);

    try {
        const cleanedBody = sanitize(req.body);
        const { products, client } = cleanedBody;

        const newOrder = new Order({
            products: products,
            client: client,
        });
        await newOrder.save();
        res.json(newOrder);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
