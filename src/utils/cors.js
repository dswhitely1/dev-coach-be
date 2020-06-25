const express = require("express");

const app = express();

const corsfix = app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
module.exports = corsfix