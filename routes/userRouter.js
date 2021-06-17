const express = require("express");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
      //business logic later
    } catch (error) {
      console.log(error);
      res.statusCode(500).json({ errors: "server error" });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      let { email, password } = req.body;
      console.log(email);
    } catch (error) {
      console.log(error);
      res.statusCode(500).json({ errors: "server error" });
    }
  });
  
  router.post("/registration", (req, res) => {});
  
  module.exports = router;
