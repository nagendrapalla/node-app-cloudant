const express = require('express');
const route = express.Router();
const db = require('./config/cloudant_db_conn');

route.use((req, res, next) => {
    console.log(req.method, '/users' + req.url);
    next();
});

route.get('/', (req, res) => {
    res.json({ success: true });
});

module.exports = route;