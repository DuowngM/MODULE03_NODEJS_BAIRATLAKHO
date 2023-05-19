const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// use static
app.use(express.static("public"));

const hostname = "127.0.0.1";
const port = 8000;
//---------------------
//Giao dien
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/gameplay/:id", (req, res) => {
  res.sendFile(__dirname + "/public/round.html");
});

//Import route Users
const playersRoutes = require("./routes/players.routes");
//Su dung route Users
app.use("/api/v1/player", playersRoutes);
//Import route Rounds
const roundRoutes = require("./routes/rounds.routes");
//Su dung route Rounds
app.use("/api/v1/round", roundRoutes);
//---------------------------------------------------------------------------
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
