const express = require("express");
const cors = require("cors");

require("./db/config");
const UserModel = require("./model/users");
const ProductModel = require("./model/product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new UserModel(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/add-product", async (req, res) => {
  let product = new ProductModel(req.body);
  let result = await product.save();
  result = result.toObject();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await UserModel.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user found" });
    }
  }
});

app.get("/products", async (req, res) => {
  let productList = await ProductModel.find();
  if (productList.length > 0) {
    res.send(productList);
  } else {
    res.send({ result: "No product found" });
  }
});

app.delete("/product/:id", async (req, res) => {
  const result = await ProductModel.deleteOne({ _id: req.params.id });
  res.send({ result });
});

app.listen(5000);
