const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudKey, cloudName, cloudSecret } = require('..');

cloudinary.config({
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

const uploadCloud = multer({ storage, limits: { fileSize: 8000000 } });

module.exports = uploadCloud;
