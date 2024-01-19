const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();

require("./src/config/config");
const routes = require("./src/routes/router");
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
