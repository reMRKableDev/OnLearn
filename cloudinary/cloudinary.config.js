const cloudinaryLib = require('cloudinary').v2;
const { cloudKey, cloudName, cloudSecret } = require('../configs');

exports.cloudinary = cloudinaryLib.config({
  cloud_name: cloudName,
  api_key: cloudKey,
  api_secret: cloudSecret,
});
