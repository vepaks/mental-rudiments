const uniqueId = require('uniqid')

const posts = [
    {
        id: 'dmdh6u4fhlirqhish',
        name: 'asasasasas',
        description: 'asasas',
        imageUrl: 'asasasasas',
        difficultyLevel: 2
    }
];

exports.getAllPosts = () => posts.slice();

exports.create = (postData) => {
    const newPost = {
        id: uniqueId(),
        ...postData,
    }
    posts.push(newPost);
    return newPost;
}

exports.getOne = (postId) => {
    return posts.find(x => x.id === postId)
}
