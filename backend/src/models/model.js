const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    price: String,
    id: String,
  },
  {
    collection: "products",
  }
);
const products = mongoose.model("products", schema);
module.exports = products;
