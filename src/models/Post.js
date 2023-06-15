const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: "Accessory"
    }]
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;