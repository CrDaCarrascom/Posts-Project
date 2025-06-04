const Post = require('../models/Post');
const { Op } = require('sequelize');

async function getPosts({ page = 1, limit = 10, search = '' }) {
  const offset = (page - 1) * limit;
  const whereClause = search ? { name: { [Op.like]: `%${search}%` } } : {};

  const { rows, count } = await Post.findAndCountAll({
    where: whereClause,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['createdAt', 'DESC']]
  });

  return {
    posts: rows,
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: parseInt(page)
  };
}

async function createPost({ name, description }) {
  return await Post.create({ name, description });
}

async function deletePost(id) {
  const post = await Post.findByPk(id);
  if (!post) return null;
  await post.destroy();
  return post;
}

module.exports = { getPosts, createPost, deletePost };