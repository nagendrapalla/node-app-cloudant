// Initialize Cloudant with settings from .env
var Cloudant = require('@cloudant/cloudant');
var username = process.env.CLOUDANT_USERNAME;
var password = process.env.CLOUDANT_PASSWORD;
var database = process.env.CLOUDANT_DATABASE;

const CONFIG = {
    account: username,
    password: password,
    maxAttempt: 5,
    plugins: {
        retry: {
            retryErrors: false,
            retryStatusCodes: [429]
        }
    }
}

var cloudant = Cloudant(CONFIG, (err, cloudant, pong) => {
    if (err) {
        return console.log('Failed to initialize Cloudant: ' + err.message);
    }
    return cloudant;
});

var db = cloudant.db.use(database);

module.exports = db;