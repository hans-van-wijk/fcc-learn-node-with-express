let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;
