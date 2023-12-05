const jwt = require("jsonwebtoken");

function getTokenExpirationDate(token) {
    return jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) {
            return console.error(err);
        } else {
            return new Date(decoded.exp * 1000);
        }
    });
}

module.exports = { getTokenExpirationDate }