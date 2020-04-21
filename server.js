const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');

const app = express();

/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* SERVE STATIC FILES */
app.use(express.static(path.join(__dirname, '/client/build')));

/* API ENDPOINTS */

/* MONGOOSE */

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

module.exports = server;