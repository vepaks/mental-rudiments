const router = require('express').Router();
// controler functions for posts routes

//path: /posts
 router.get("/create", (req, res) => {
    res.render("create");
 })

module.exports = router;