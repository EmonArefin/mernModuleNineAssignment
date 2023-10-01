const express = require("express");
const app = express();

const router = require("./src/routes/api");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// I just installed these package.
// const jsonWebToken = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const mySql = require("mysql");
// const validator = require("validator");

const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require('express-mongo-sanitize');

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

app.use(limiter);

app.use("/api", router);

app.use("*", (req, res)=>{
    res.status(404).json({
        Status: "Fail",
        Data: "Data not found"
    })
});




module.exports = app;