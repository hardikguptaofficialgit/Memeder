const { body, validationResult, param, query } = require('express-validator');
const fs = require('fs');
const path = require('path');

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    // Delete uploaded file if validation fails
    if (req.file) {
      const filePath = path.join(__dirname, '../assets/images', req.file.filename);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Failed to delete file:', filePath, err);
      });
    }
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  next();
};

// User registration validation
const validateUserRegistration = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage('Username must be between 3 and 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6, max: 100 })
    .withMessage('Password must be between 6 and 100 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
  
  handleValidationErrors
];

// User login validation
const validateUserLogin = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  
  handleValidationErrors
];

//Meme file upload validation
const validateMemeUpload = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required'),

  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array')
    .custom((tags) => {
      if (tags.length === 0) {
        throw new Error('Tags array must not be empty');
      }
      return true;
    }),

  handleValidationErrors
];

//Meme file upload validation
const validateUpdatedMeme = [
  body('title')
    .trim()
    .optional()
    .isString()
    .withMessage('Title must be a string'),

  body('description')
    .trim()
    .optional()
    .isString()
    .withMessage('Description must be a string'),

  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array')
    .custom((tags) => {
      if (tags.length === 0) {
        throw new Error('Tags array must not be empty');
      }
      return true;
    }),

  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  validateUserRegistration,
  validateUserLogin,
  validateMemeUpload,
  validateUpdatedMeme
};



