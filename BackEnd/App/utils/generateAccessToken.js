const jwt = require("jsonwebtoken");
require('dotenv').config()
function generateAccessToken(user) {
    return jwt.sign(
        { data: {
                    user_id: user.id,
                    user_role: user.role,
                    user_email: user.email
                 },
                },
        process.env.SECRET_TOKEN,
        { expiresIn: '10m' }
    );
}

module.exports = { generateAccessToken }