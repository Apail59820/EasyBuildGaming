module.exports = app => {

    const entries = require("../controllers/authControllers.js");

    const router = require("express").Router();

    router.use(function(req, res, next) {

        // TODO : Setup CORS
        res.header("Access-Control-Allow-Origin", "*");

        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });


    router.post('/login', entries.login);

    app.use('/auth', router);
};