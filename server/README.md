# Posts Project Server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in production mode.

### `npm run dev`

Runs the server in development mode with nodemon for automatic restarts.

## Project Structure

The server follows a modular and organized structure:

```
.
├── config/          # Configuration files
│   └── database.js  # PostgreSQL database configuration
├── models/         # Sequelize models
│   └── Post.js     # Post model definition
├── server.js       # Main server file
└── package.json    # Project dependencies and scripts
```

### Key Components

1. **config/**
   - Database configuration
   - Environment variables

2. **models/**
   - Sequelize model definitions
   - Database schema
   - Model methods

3. **server.js**
   - Express server setup
   - Route definitions
   - Middleware configuration

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- cors
- dotenv

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Create a .env file with the following variables:
```
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=posts_db
```

3. Start the development server:
```bash
npm run dev
```

The server will run on http://localhost:3001

## API Endpoints

- GET `/api/posts` - Get all posts
- POST `/api/posts` - Create a new post
- GET `/api/posts/:id` - Get a specific post
- PUT `/api/posts/:id` - Update a post
- DELETE `/api/posts/:id` - Delete a post

## Database Setup

The project uses PostgreSQL with Sequelize ORM. Make sure PostgreSQL is installed and running before starting the server.

## License

MIT License
