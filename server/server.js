require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./config/database');
const Post = require('./models/Post');
const { Op } = require('sequelize');

const app = express();

async function initializeDatabase() {
  try {
    await db.authenticate();
    console.log('Database connected successfully');
    await db.sync();
    console.log('Database models synced');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

app.use(cors());
app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    // Using Sequelize's Op.like for safe SQL injection prevention
    const whereClause = search ? {
      name: {
        [Op.like]: `%${search}%`
      }
    } : {};

    const [posts, total] = await Promise.all([
      Post.findAndCountAll({
        where: whereClause,
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [['createdAt', 'DESC']]
      }),
      Post.count({ where: whereClause })
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      posts: posts.rows,
      totalItems: total,
      totalPages,
      currentPage: parseInt(page)
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    const post = await Post.create({ name, description });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.destroy();
    res.json(post);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
