const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controler');

// Route for user registration with validation
router.post('/register', [
  // Validate data coming from the frontend
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  
  body('fullname.firstname')
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters long'),
  
  body('fullname.lastname')
    .isLength({ min: 2 })
    .withMessage('Last name must be at least 2 characters long'),
  
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
], userController.registerUser);

module.exports = router;
