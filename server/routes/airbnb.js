const express = require("express");
const request = require("request");
const router = express.Router();

const baseUrl = "https://api.airbnb.com/v2/calendars";

const headers = {
  "x-airbnb-api-key": process.env.AIRBNB_KEY,
  "X-Airbnb-OAuth-Token": process.env.AIRBNB_TOKEN,
  "Content-Type": "application/x-www-form-urlencoded",
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
};

router.post("/", function(req, res) {
  const { property, startDate, endDate } = req.body;
  console.log("REQUEST:", req.body);

  const options = {
    uri: `/${property}/${startDate}/${endDate}`,
    baseUrl,
    method: "GET",
    headers
  };
  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("BODY: ", body);
      return res.send(body);
    }
    console.log("ERROR: ", error);
    return res.send(error);
  });
});

module.exports = router;
