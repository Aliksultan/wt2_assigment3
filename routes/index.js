const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.render('index', { posts });
  } catch {
    res.redirect('/');
  }
});

module.exports = router;
