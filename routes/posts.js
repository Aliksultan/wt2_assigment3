const express = require('express');
const router = express.Router();
const Post = require('../models/post');


router.get('/new', (req, res) => {
  res.render('new-post');
});
// Create a new post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await post.save();
    res.redirect('/');
  } catch {
    res.render('new', {
      post: post,
      errorMessage: 'Error creating post',
    });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render('post', { post });
    } catch {
      res.redirect('/');
    }
});
  
module.exports = router;

