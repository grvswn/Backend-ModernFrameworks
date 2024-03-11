const express = require("express");

require("dotenv").config();

let app = express();

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false
  })
);

async function main() {
  
};

main();

app.listen(3000, () => {
  console.log("Server has started");
});

