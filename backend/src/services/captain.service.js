const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    vehicleType,
    capacity
}) => {
    
    if (!firstname || !email || !password || !color || !plate || !vehicleType || !capacity) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create(
        {
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email,
            password,
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                vehicleType: vehicleType
            }
        })
    return captain
}