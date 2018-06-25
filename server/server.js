require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

//config
const app = express();
const port = process.env.PORT || 3500;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routers
const airbnb = require("./routes/airbnb");
const email = require("./routes/email");

app.get("/", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.use("/email", email);
app.use("/getAvailability", airbnb);

app.listen(port, () => console.log(`Listening on port ${port}`));
