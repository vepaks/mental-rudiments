const router = require('express').Router()
const postsManager = require('../managers/postsManager');

router.get( '/', (req, res) => {
    const { search, from, to } = req.query;
    const posts = postsManager.getAllPosts(search, from, to);
    res.render('index', { posts, search, from, to });
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get( '/404', (req, res) => {
    res.render('404')
})

module.exports = router;
