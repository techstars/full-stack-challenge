const express = require("express");
const app = express();
const queries = require("./queries");
// const morgan = require('morgan')
// const bodyParser  = require('body-parser')
// const cors = require('cors')
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/companies", (req, res, next) => {
  queries
    .listAllCompanies()
    .then((companies) => res.send(companies))
    .catch(next);
});

app.get("/founders", (req, res, next) => {
  queries
    .listAllFounders()
    .then((founders) => res.send(founders))
    .catch(next);
});

app.listen(port);
