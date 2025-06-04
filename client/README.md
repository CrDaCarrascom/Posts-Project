# Getting Started with Posts Project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Project Structure

The project follows a modular and organized structure:

```
src/
├── app/              # Application configuration
│   └── store.js     # Redux store setup and configuration
│
├── components/       # Reusable React components
│   ├── PostForm.js  # Form component for creating and editing posts
│   ├── PostTable.js # Table component for displaying posts
│   ├── Pagination.js # Pagination component for post listing
│   ├── PostList.js  # List component for displaying posts
│   ├── PostFilter.js # Filter component for posts
│   └── SearchForm.js # Search component for filtering posts
│
├── features/         # Feature modules
│   └── postsSlice.js # Redux slice for posts state management
│
├── App.js           # Main application component
├── App.css          # Main application styles
├── index.js         # Application entry point
├── index.css        # Global styles
└── logo.svg         # Application logo
```

### Key Components

1. **App.js**
   - Main application component
   - Contains the main layout and routing
   - Manages the main application state

2. **Store Configuration (app/store.js)**
   - Redux store setup
   - Middleware configuration
   - Root reducer configuration

3. **Posts Feature (features/posts/)**
   - Centralized state management for posts
   - Async operations (fetch, create, delete)
   - State persistence and error handling

4. **UI Components (components/)**
   - **PostForm**: Form for creating and editing posts
   - **PostTable**: Table view for displaying posts
   - **PostList**: List component for displaying posts
   - **Pagination**: Component for paginating posts
   - **PostFilter**: Filter component for posts
   - **SearchForm**: Search component for filtering posts

This structure promotes code organization, maintainability, and separation of concerns, making it easier to scale and maintain the application.

## Technologies Used

- React 18.2.0
- Redux Toolkit 2.2.2
- React Redux 9.1.3
- axios 1.6.7

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will automatically reload when you make changes to the code.

