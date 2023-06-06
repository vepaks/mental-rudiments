const router = require('express').Router()
const postsManager = require('../managers/postsManager');

router.get( '/', (req, res) => {
    const posts = postsManager.getAllPosts()
    res.render('index', { posts });
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;