# Posts Management Application

A full-stack application for managing posts built with React, Redux, Node.js, and PostgreSQL.

## Features
- Create posts with name and description
- Delete posts
- List all posts
- Filter posts by name
- Backend API with PostgreSQL database

## Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install frontend dependencies:
```bash
cd client
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
```

4. Create a PostgreSQL database:
```sql
CREATE DATABASE IF NOT EXISTS posts_db;

USE posts_db;

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

5. Configure environment variables:
- Create a `.env` file in the server directory with:
```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=posts_db
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`
