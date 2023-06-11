const express = require('express');

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const homeControler = require('./controlers/homeControler')
const postsControler = require('./controlers/postsControler')

const app = express();
const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)

// Routes
app.use(homeControler)
app.use("/posts", postsControler)
app.use("*", (req, res) => {
    res.redirect("/404")
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});
