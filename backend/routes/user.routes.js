// 4. create routes (routes=> user.routes.js) and validating(using express-validator) all data, who coming from frotend

const express = require('express');
const router = express.Router();

const { body } = require('express-validator')
const userController = require('../controllers/user.controler')

router.post('/register',[
    // validate data, who coming from frontend
    body('email').isEmail().withMessage('Invalid Email')
    body('fullname.firstname').isLength({min: 2}).withMessage('firstname must be contains atleast 3 characters long')
    body('fullname.lastname').isLength({min: 2}).withMessage('lastname must be contains atleast 3 characters long')
    body('password').isLength({min: 5}).withMessage('password field must be contain atleast 5 characters long')
], userController.registerUser)


module.exports = router