const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const dotenv = require("dotenv");



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(mongoSanitize());

// Routes
const apiRouter = require("./src/Routes/api");
app.use("/api", apiRouter);
// 404 Route
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Not Found" });
});

module.exports = app;
