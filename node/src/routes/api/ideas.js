const express = require("express");
const router = express.Router();

let ideas = [];

router.get("/", (req, res) => {
  res.json({
    ideas: ideas
  });
});

router.post("/", (req, res) => {
  const ideasToSave = req.body;
  if (ideasToSave) {
    ideas = ideasToSave;
    console.log(ideas);
    res.json({
      status: 200,
      ok: "ok"
    });
  }
});

router.post("/del", (req, res) => {
  const ideaToDelete = req.body.idea;
  ideas = ideas.filter(idea => idea.id !== ideaToDelete.id);
  res.json({
    status: 200,
    ok: "ok"
  });
});

router.post("/idea", (req, res) => {
  const ideaToSave = req.body;
  if (ideaToSave) {
    ideas.push(ideaToSave);
    res.json({
      status: 200,
      ok: "ok"
    });
  }
});

module.exports = router;
