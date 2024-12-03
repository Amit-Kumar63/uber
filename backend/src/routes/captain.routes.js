const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name is must be at least 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color is must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate is must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['motorcycle', 'car', 'auto']).withMessage('Invalid vehicle type')
], captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain ,captainController.getCaptain);

router.get('/logout', authMiddleware.authCaptain ,captainController.logoutCaptain);

module.exports = router;