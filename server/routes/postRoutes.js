const express = require('express');
const router = express.Router();
const postService = require('../services/postService');
const { validatePostData } = require('../rules/postRules');

router.get('/', async (req, res) => {
  try {
    const result = await postService.getPosts(req.query);
    res.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

router.post('/', async (req, res) => {
  const validation = validatePostData(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;