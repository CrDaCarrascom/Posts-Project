-- Create the database user
CREATE USER postsadmin WITH PASSWORD 'postsadmin';

-- Grant superuser privileges to the user
ALTER USER postsadmin WITH SUPERUSER;

-- Create the database
CREATE DATABASE posts_db;

-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON DATABASE posts_db TO postsadmin;

-- Connect to the database
\connect posts_db

-- Create the posts table
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
