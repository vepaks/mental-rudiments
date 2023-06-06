const router = require('express').Router();
// manager
const postsManager = require('../managers/postsManager');

//path: /posts
 router.get("/create", (req, res) => {
    res.render("create");
     console.log(postsManager.getAllPosts())
 })
router.post("/create", (req, res) => {

    const {name, description, imageUrl, difficultyLevel } = req.body;

    postsManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    })

    res.redirect('/')
})

module.exports = router;
