const posts = [];

exports.getAllPosts = () => posts.slice();

exports.create = (postData) => {
    const newPost = {
        id: posts.length + 1,
        ...postData,
    }
    posts.push(newPost);
    return newPost;
}


