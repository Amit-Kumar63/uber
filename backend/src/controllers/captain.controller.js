const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password, fullname, vehicle } = req.body;

    const captainAlreadyExists = await captainModel.findOne({ email });
    if (captainAlreadyExists) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
    })
    const token = await captain.generateAuthToken();
    res.status(201).json({ captain, token });
}