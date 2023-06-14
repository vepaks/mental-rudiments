const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    name: String,
    description: String,
    imageUrl: String,
})

const Accessory = mongoose.model('Accessory', postSchema);

module.exports = Accessory;