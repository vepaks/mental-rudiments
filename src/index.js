const express = require('express');

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const homeControler = require('./controlers/homeControler')

const app = express();
const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)

// Routes
app.use(homeControler)
app.get("*", (req, res) => {
    res.render('404');
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});
