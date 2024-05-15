let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;
const IndexView = __dirname + "/views/index.html";
// const publicFolder = __dirname + "/public";

app.get("/", (req, res) => {
  res.sendFile(IndexView);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

// app.use("public", express.static(publicFolder));
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
