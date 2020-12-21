const multer = require('multer');
const { storage } = require('./cloudinary.storage');

exports.uploader = multer({ storage, limits: { fileSize: 8000000 } });
