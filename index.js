require('dotenv').config();

// Load the Cloudant library.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./api/users');

const app = express();

const DIST_DIR = __dirname;
const STATIC_DIR = path.join(DIST_DIR, 'static');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;

app.use('/public', express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', users);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error occured while starting the server" + err);
    } else {
        console.log("Server started, Accessable url is : http://" + HOST + ":" + PORT);
    }
})