const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controler');
const authMiddleware = require('../middlewares/auth.middleware')

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

router.post('/login',[
  // validate data for login functionality
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password')
    .isLength({min: 5})
    .withMessage('password must be contain at least 5 characters long')
], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

module.exports = router;
