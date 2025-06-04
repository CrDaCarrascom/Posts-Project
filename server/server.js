require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initializeDatabase } = require('./config/database');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de posts
app.use('/api/posts', postRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});