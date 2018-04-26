const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const movieRouter = require("./routers/movieAPI");

app.use("/api", movieRouter);

module.exports = app;
