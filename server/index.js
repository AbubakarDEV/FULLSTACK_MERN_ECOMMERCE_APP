const express = require("express");
const cors = require("cors");

require("./db/config");
const UserModel = require("./model/users");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  res.send("hello");
});

app.listen(5000);
