const router = require('express').Router()

const homeControler = require('./controlers/homeControler')
const postsControler = require('./controlers/postsControler')
const accessoryControler = require('./controlers/accesoryControler')

// Routes
router.use(homeControler)
router.use("/posts", postsControler)
router.use("/accessories", accessoryControler)

router.use("*", (req, res) => {
    res.redirect("/404")
})

module.exports = router;