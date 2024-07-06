const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.get("/", async (req, res) => {
  try {
    res.render("users/index.ejs", {
      users: await User.find(),
    });
  } catch (error) {
    console.log(error);
    res.redirect("/users");
  }
});

module.exports = router;
