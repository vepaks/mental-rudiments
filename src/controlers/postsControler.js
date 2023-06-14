const router = require('express').Router();
// manager
const postsManager = require('../managers/postsManager');
const accessoryManager = require('../managers/accessoryManager');

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
   const post = await postsManager.getOne(req.params.postId).lean()
    const accessory = await accessoryManager.getAllAccessory()

  res.render('accessory/attach', {post, accessory })
})

module.exports = router;
