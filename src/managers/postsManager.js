const Post = require('../models/Post')

exports.getAllPosts =async (search, from, to ) => {
    let filteredPosts = await Post.find().lean();

    if (search) {
        filteredPosts = filteredPosts.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (from) {
        filteredPosts = filteredPosts.filter(x => x.difficultyLevel >= Number(from))
    }

    if (to) {
        filteredPosts = filteredPosts.filter(x => x.difficultyLevel <= Number(to))
    }
    return filteredPosts;
};
exports.getOne = (postId) => {
    return Post.findById(postId).lean();
}

exports.create = async (postData) => {
    const post = new Post(postData)
    await post.save()
    return post;
}

