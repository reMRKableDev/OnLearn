const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('./cloudinary.config');

exports.storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'onLearn',
    allowedFormats: ['jpg', 'png', 'pdf'],
    use_filename: true,
  },
});
