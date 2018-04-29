const express = require("express");
const router = express.Router();
const email = require("../controllers/email");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// define the contact route ("/email")
router.post("/", function(req, res) {
  email
    .SendEnquiryMail(req.body)
    .then(success => {
      res.send(success);
    })
    .catch(err => res.send(err));
});

module.exports = router;
