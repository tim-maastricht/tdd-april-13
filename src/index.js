const express = require("express");
const log = require("smallog");

const app = express();

app.use(express.json());

module.exports = app;