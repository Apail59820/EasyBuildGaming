const jwt = require("jsonwebtoken");
const db = require('../db');

require('dotenv').config()
const accountabilityMiddleware = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];

    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1];

        try{
            const webtoken = jwt.verify(token, process.env.SECRET_TOKEN);
            req.accountability = webtoken.data;
            next();
        }catch(e) {
            return res.status(403).send({data: e});
        }
    }
};

module.exports = {
    extractAccountability: accountabilityMiddleware,
};
