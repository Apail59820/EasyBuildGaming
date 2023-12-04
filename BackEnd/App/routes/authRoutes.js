const entries = require("../controllers/authControllers.js");
const {extractAccountability} = require("./accountabilityMiddleware");

const router = require("express").Router();

router.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(extractAccountability);

router.post('/login', entries.login);

module.exports = router;