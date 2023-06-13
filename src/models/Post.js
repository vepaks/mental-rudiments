const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    title: String,
    text: String,
    imageUrl: String,
    difficultyLevel: Number,
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;