const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const abttruRoutes = require("./routes/abttruAPI");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");

var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
app.use(session(sess));

// Configure to use body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add API Routes
app.use("/api", abttruRoutes);



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aBetterYou");
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_g9qnjs2k:4mu4ku96lnli703pl5uhq20fun@ds131902.mlab.com:31902/heroku_g9qnjs2k");

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});