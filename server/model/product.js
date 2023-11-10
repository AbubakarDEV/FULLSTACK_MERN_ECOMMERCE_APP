const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
