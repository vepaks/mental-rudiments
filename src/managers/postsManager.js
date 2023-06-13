const uniqueId = require('uniqid')

const posts = [
    {
        id: 'dmdh6u4fhlirqhish',
        name: 'Xubuntu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Donec et odio pellentesque diam volutpat commodo sed egestas. Sodales neque sodales ut etiam sit. Tristique senectus et netus et. Leo in vitae turpis massa sed. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Massa ultricies mi quis hendrerit dolor magna eget. Semper quis lectus nulla at. Ut sem nulla pharetra diam sit amet nisl suscipit. Donec adipiscing tristique risus nec feugiat in fermentum. Nam aliquam sem et tortor consequat id porta. Mattis nunc sed blandit libero volutpat. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.\n' +
            '\n' +
            'Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Non consectetur a erat nam at. Nec feugiat nisl pretium fusce id velit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Vel pretium lectus quam id. Ultrices gravida dictum fusce ut placerat orci nulla. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Pellentesque habitant morbi tristique senectus et netus et. Pellentesque nec nam aliquam sem et tortor consequat id. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.\n' +
            '\n' +
            'Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Nisl suscipit adipiscing bibendum est ultricies integer quis. Vitae semper quis lectus nulla. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Arcu vitae elementum curabitur vitae. Adipiscing commodo elit at imperdiet dui accumsan. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet cursus sit amet dictum sit amet. Placerat duis ultricies lacus sed. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Accumsan sit amet nulla facilisi morbi. Nisl pretium fusce id velit ut tortor pretium.\n' +
            '\n' +
            'Enim sed faucibus turpis in eu mi bibendum. Augue lacus viverra vitae congue. In nisl nisi scelerisque eu ultrices vitae auctor. Tincidunt vitae semper quis lectus nulla at volutpat. Lacinia quis vel eros donec ac odio. Pulvinar neque laoreet suspendisse interdum consectetur. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Elit scelerisque mauris pellentesque pulvinar. Id ornare arcu odio ut sem nulla pharetra diam sit. Molestie a iaculis at erat pellentesque adipiscing commodo elit at.\n' +
            '\n' +
            'Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Viverra orci sagittis eu volutpat odio. Aliquam ut porttitor leo a diam sollicitudin tempor id. Quam viverra orci sagittis eu volutpat odio facilisis. Ut etiam sit amet nisl purus in. Amet massa vitae tortor condimentum lacinia quis vel eros. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. At in tellus integer feugiat scelerisque varius. Tempus quam pellentesque nec nam. Varius morbi enim nunc faucibus. Non pulvinar neque laoreet suspendisse. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Ut tortor pretium viverra suspendisse potenti nullam. A lacus vestibulum sed arcu non odio euismod lacinia. Lectus sit amet est placerat. Tortor posuere ac ut consequat. Et molestie ac feugiat sed lectus vestibulum.',
        imageUrl: '#',
        difficultyLevel: 1
    },

    {
        id: 'dmahu4fh2lirqhish',
        name: 'Kali Linux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: '#',
        difficultyLevel: 2
    }
];

exports.getAllPosts = (search, from, to ) => {
    let filteredPosts = posts.slice();

    if (search) {
        filteredPosts = filteredPosts.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }


    // if (from) {
    //     filteredPosts = filteredPosts.filter(x => x.difficultyLevel >= Number(from))
    // }
    //
    // if (to) {
    //     filteredPosts = filteredPosts.filter(x => x.difficultyLevel <= Number(to))
    // }
    return filteredPosts;
};
exports.getOne = (postId) => {
    return posts.find(x => x.id === postId)
}

exports.create = (postData) => {
    const newPost = {
        id: uniqueId(),
        ...postData,
    }
    posts.push(newPost);
    return newPost;
}

