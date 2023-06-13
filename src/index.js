const express = require('express');

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const dbConnect = require('./config/dbConfig')
const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)
app.use(routes)

dbConnect().then(()=> {
    console.log('DB is connected')
}).catch((err) => {
    console.log('DB error', err)
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});
