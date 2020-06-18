const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "This is a journey into scpace, Code and Time.";
const aboutContent = "Content about the Information Era.";
const contactContent = "The search for information behond our Time.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));







app.listen(3000, function() {
  console.log("Server started on port 3000")
});