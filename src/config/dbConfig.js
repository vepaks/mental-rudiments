const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mental-rudiments'

async function dbConnect (){
    await mongoose.connect(URI)
}

module.exports = dbConnect;