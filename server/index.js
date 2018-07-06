require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
// const axios = require("axios");
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.search("db", dbInstance); //error here
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
