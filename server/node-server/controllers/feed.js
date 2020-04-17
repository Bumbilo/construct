exports.getPosts = (req, res, next) => {
    res.json({
        posts: [{title: 'first post', content: 'This is the first post!'}]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
   // Create post in db
    res.status(201).json({
        message: 'Post create  successfully!',
        post: {id: new Date().toISOString(), title: title, content: content}
    })
};