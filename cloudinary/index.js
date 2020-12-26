const multer = require('multer');
const cloudinaryLib = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudKey, cloudName, cloudSecret } = require('../configs');

const cloudinary = cloudinaryLib.config({
  cloud_name: cloudName,
  api_key: cloudKey,
  api_secret: cloudSecret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'onLearn',
    allowedFormats: ['jpg', 'png', 'pdf'],
    use_filename: true,
  },
});

const uploader = multer({ storage, limits: { fileSize: 8000000 } });

module.exports = uploader;
