const express = require("express");
const router = express.Router();

let ideas = [];

router.get("/", (req, res) => {
  res.json({
    status: 200,
    working: "yeah"
  });
});

router.post("/", (req, res) => {
  console.log("received psot ");
  res.json({
    status: 200,
    working: "post, yeah"
  });
});

module.exports = router;
