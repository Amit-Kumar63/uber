const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        throw new Error('Unauthorized');
    }
    // const isBlacklistedToken = await blacklistTokenModel.findOne({ token });
 
    // if (isBlacklistedToken) {
    //     throw new Error('Unauthorized');
    // }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
    const user = await userModel.findById(decodedToken._id);
    
    if (!user) {
        throw new Error('Unauthorized');
    }
    req.user = user;
    next();
}
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new Error('Unauthorized');
    }
    const isBlacklistedToken = await blacklistTokenModel.findOne({ token });
    if (isBlacklistedToken) {
        throw new Error('Unauthorized');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decodedToken._id);
    if (!captain) {
        throw new Error('Unauthorized');
    }
    req.captain = captain;
    next();
}