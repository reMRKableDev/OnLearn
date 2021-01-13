const { CloudinaryStorage } = require('multer-storage-cloudinary');
const fileUploader = require('../index');
const {
  validateTypeOf,
  validateEquality,
  validateNotEmpty,
  validateInstanceOf,
  validateArrayLength,
  validateStringEquality,
  validateArrayContaining,
} = require('../../../utils/test-utils/validators.utils');

describe('Cloudinary uploader Test Suite', () => {
  test('should validate fileUploader object to not be empty ', () => {
    validateNotEmpty(fileUploader);
  });

  test('should validate fileUploader is typeof object', () => {
    validateTypeOf(fileUploader, 'object');
  });

  test('should validate fileUploader to use CloudinaryStorage as storage', () => {
    const { storage } = fileUploader;
    validateInstanceOf(storage, CloudinaryStorage);
  });

  test('should validate fileUploader storage params', () => {
    const { params } = fileUploader.storage;
    const expectedParams = {
      folder: 'onLearn',
      allowedFormats: ['jpg', 'png', 'pdf'],
      use_filename: true,
    };

    validateStringEquality(params.folder, expectedParams.folder);
    validateArrayLength(params.allowedFormats, 3);
    validateArrayContaining(
      params.allowedFormats,
      expectedParams.allowedFormats
    );
    validateEquality(params.use_filename, expectedParams.use_filename);
  });

  test('should validate fileUploader limits.fileSize to be 8MB', () => {
    const { limits } = fileUploader;

    validateEquality(limits.fileSize, 8000000);
  });
});
