const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to MongoDB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds161517.mlab.com:61517/heroku_85wb2q5g";


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
