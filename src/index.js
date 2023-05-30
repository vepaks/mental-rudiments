const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 3000;

// Handlebars configuration

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');
app.set('views', __dirname +'/views');

// Routes
app.get('/', (req, res) => {
    res.render('index');
})
app.get("*", (req, res) => {
    res.render('404');
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});

