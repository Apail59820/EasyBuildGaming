const jwt = require("jsonwebtoken");
require('dotenv').config()
function generateAccessToken(userID) {
    return jwt.sign(
        { userId: userID },
        process.env.SECRET_TOKEN,
        { expiresIn: '10m' }
    );
}

module.exports = { generateAccessToken }