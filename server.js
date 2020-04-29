const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* SERVE STATIC FILES */
app.use(express.static(path.join(__dirname + '/client/build')));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
    res.status(404).json({ message: 'Not found '});
});

/* MONGOOSE */
process.env.NODE_ENV === 'production' ?
    mongoose.connect(`mongodb+srv://user-mkw:${process.env.dbPassword}@cluster0-ltnvo.mongodb.net/shopDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    : mongoose.connect('mongodb://localhost:27017/shopDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

app.use(session({
    secret: 's%3AKSSaYuXPg5w6OOZ3mbBV1IiUNZYCOIjh.OltlgpUaRpj%2F8nkU3pS%2BRUjnhkRB1OciU5myEHR9O3k',
    store: new MongoStore({ mongooseConnection: db }),
}));

db.once('open', () => {
    console.log('Conntected to the database');
});

db.on('error', err => console.log('Error ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

module.exports = server;