const express = require("express");
require("dotenv").config();
const cors = require('cors');

let app = express();

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(cors());

const memberRoutes = require('./routes/members')

async function main() {
  app.use('/members', express.json(), memberRoutes);
};

main();

app.listen(3000, () => {
  console.log("Server has started");
});