const express = require('express')
const app = express()
const port = 8055

const cors = require("cors");

const authRoutes = require("./App/routes/authRoutes");

var corsOptions = {
    origin: ["http://localhost:3000"]
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});