const AWS = require('ibm-cos-sdk');

var config = {
    "region": "us-south",
    endpoint: process.env.OBJECT_STORAGE_ENDPOINT,
    apiKeyId: process.env.OBJECT_STORAGE_APIKEY,
    ibmAuthEndpoint: process.env.OBJECT_STORAGE_IBM_AUTH_ENDPOINT,
    serviceInstanceId: process.env.OBJECT_STORAGE_SERIVCE_INSTANCE_ID
};

var cos = new AWS.S3(config);

module.exports = cos;