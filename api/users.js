const express = require('express');
const uuid = require('uuid');
const path = require('path');
const route = express.Router();
const obs = require('../api/object-storage-functions');
const bucketName = process.env.OBJECT_STORAGE_BUCKET_NAME;

route.use((req, res, next) => {
    console.log(req.method, '/users' + req.url);
    next();
});

route.get('/', (req, res) => {
    obs.getBucketContents(bucketName).then((data) => {
        res.json(data.Contents);
    });
});

route.post('/', (req, res) => {
    const fileActualLocation = req.body.location;
    const ext = path.extname(fileActualLocation);
    const fileName = uuid.v4() + ext;
    obs.multiPartUpload(bucketName, fileName, fileActualLocation).then(data => {
        res.json(data);
    });
});

module.exports = route;