-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS posts_db;

-- Switch to the database
USE posts_db;

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO posts (name, description) VALUES
('Sample Post 1', 'This is a sample post description'),
('Sample Post 2', 'Another sample post with more detailed description');
