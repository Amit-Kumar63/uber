const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new Error('Unauthorized');
    }
    const isBlacklistedToken = await blacklistTokenModel.findOne({ token });
    if (isBlacklistedToken) {
        throw new Error('Unauthorized');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken._id);
    if (!user) {
        throw new Error('Unauthorized');
    }
    req.user = user;
    next();
}
module.exports = authMiddleware;