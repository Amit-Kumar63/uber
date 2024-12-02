const express = require('express');
const { body } = require('express-validator')
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name is must be at least 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], userController.loginUser)

router.get('/profile', authMiddleware ,userController.getUser)
router.get('/logout', authMiddleware ,userController.logoutUser)

module.exports = router;