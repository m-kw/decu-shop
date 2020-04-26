const Order = require('../models/order.model');
const sanitize = require('mongo-sanitize');

exports.postOrder = async (req, res) => {

    try {
        const cleanedBody = sanitize(req.body);
        const { cart, client } = cleanedBody;

        const newOrder = new Order({
            cart: cart,
            client: client,
        });

        await newOrder.save();
        res.json(newOrder);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
