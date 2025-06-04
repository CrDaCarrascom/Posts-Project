const { db } = require('../config/database');
const { DataTypes } = require('sequelize');

const Post = db.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

Post.sync()
  .then(() => console.log('Post model synced'))
  .catch(err => console.error('Error syncing Post model:', err));

module.exports = Post;
