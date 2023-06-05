const router = require('express').Router();
// controler functions for posts routes

//path: /posts
 router.get("/create", (req, res) => {
    res.render("create");
 })

router.post("/create", (req, res) => {
    console.log(req.body);

    res.send("Create post");
})


module.exports = router;