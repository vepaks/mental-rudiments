const Post = require('../models/Post')

// get all posts and filter by search
// TODO: add filter on server side not in memory
exports.getAllPosts = async (search, from, to ) => {
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

// get one post
exports.getOne = (postId) => Post.findById(postId);
exports.getOneWithAccessories = (postId) => this.getOne(postId).populate('accessories');

// create a post
exports.create = async (postData) => {
    const post = new Post(postData)
    await post.save()
    return post;
}

// attach accessory to post
exports.attachAccessory = async (postId, accessoryId) => {
    return Post.findByIdAndUpdate(postId, { $push: { accessories: accessoryId } },)
    // const post = await Post.findById(postId)
    // post.accessories.push(accessoryId)
    // await post.save()
    // return post
}
