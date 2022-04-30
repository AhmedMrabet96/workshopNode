let express = require("express");
let router = express.Router();

// router.get("/person", (req, res) => res.send("You have requeted a person"));

//params property on the request object
// localhost:3000/person/ahmed
router.get("/person/:name", (req, res) =>
  res.send(`You have requeted a person: ${req.params.name}`)
);

//QueryString => query on the request object
// localhost:3000/person?name=ahmed&age=25
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`You have requeted a person: ${req.query.name}`);
  } else {
    res.send("You have requested unnamed person");
  }
});

router.get(`/error`, (req, res) => {
  throw new Error("this is a forced error");
});
module.exports = router;
