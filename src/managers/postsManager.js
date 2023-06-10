const uniqueId = require('uniqid')

const posts = [];

exports.getAllPosts = () => posts.slice();

exports.create = (postData) => {
    const newPost = {
        id: uniqueId(),
        ...postData,
    }
    posts.push(newPost);
    return newPost;
}
