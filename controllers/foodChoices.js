const router = require("express").Router();
const Membership = require("../data/Membership");

router.get("/", (req, res) => {
  res.json(Membership);
});

module.exports = router;
