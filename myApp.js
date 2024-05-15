let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;
const IndexView = __dirname + "/views/index.html";
const publicFolder = __dirname + "/public";

app.get("/", (req, res) => {
  res.sendFile(IndexView);
});

// app.use("public", express.static(publicFolder));
app.use("/public", express.static(publicFolder));

module.exports = app;
