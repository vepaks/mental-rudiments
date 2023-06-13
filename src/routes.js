const router = require('express').Router()

const homeControler = require('./controlers/homeControler')
const postsControler = require('./controlers/postsControler')

// Routes
router.use(homeControler)
router.use("/posts", postsControler)
router.use("*", (req, res) => {
    res.redirect("/404")
})

module.exports = router;