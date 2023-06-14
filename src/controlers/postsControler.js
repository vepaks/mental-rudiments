const router = require('express').Router();
// manager
const postsManager = require('../managers/postsManager');

//path: /posts
 router.get("/create", (req, res) => {
    res.render("create");
 })
router.post("/create", async (req, res) => {

    const {name, description, imageUrl, difficultyLevel } = req.body;

   await postsManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    })

    res.redirect('/')
})

router.get('/:postId/details', async (req, res) => {
    const post = await postsManager.getOne(req.params.postId).lean()
    if (!post) {
       return res.redirect('/404')
    }
    res.render('details', {...post})
})

router.get('/:postId/attach-accessory', async (req, res) => {
    res.render('/accessory/attach')
})

module.exports = router;
