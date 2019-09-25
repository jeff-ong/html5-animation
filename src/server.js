const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.use("/", express.static(path.join(__dirname, "./public")));

app.listen(process.env.PORT || 8888, function() {
  console.log("listening on port 8888");
});
