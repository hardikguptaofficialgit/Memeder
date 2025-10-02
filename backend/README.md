# Memeder Backend

The backend API for Memeder - a Tinder-like application for memes. Built with Node.js and Express, featuring JWT authentication, MongoDB integration, and comprehensive input validation.

## Tech Stack

- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for secure authentication
- **Express Validator** - Middleware for input validation
- **bcryptjs** - Password hashing library

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MLSAKIIT/memeder.git
cd memeder/backend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Environment Setup
Create a `.env` file in the backend root:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/memeder
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Server will start at [http://localhost:3000](http://localhost:3000)

The server will automatically restart when you make changes to the code.

## Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 🎭 **Meme Management** - CRUD operations for memes
- ✅ **Input Validation** - Comprehensive validation for all endpoints
- 🛡️ **Security** - Password hashing, CORS, and error handling
- 📊 **User Interactions** - Swipe tracking and meme rating system
- 🔄 **API Design** - RESTful endpoints with standardized responses

## API Endpoints

### Authentication Routes (`/api/auth`)
```
POST /api/auth/register    # Register new user
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/profile     # Get user profile (Protected)
```

### Meme Routes (`/api/memes`)
```
GET    /api/memes          # Get random memes for swiping (Protected)
POST   /api/memes          # Create new meme (Protected)
GET    /api/memes/:id      # Get specific meme (Protected)
PUT    /api/memes/:id      # Update meme (Protected)
DELETE /api/memes/:id      # Delete meme (Protected)
POST   /api/memes/:id/swipe # Swipe on meme (Protected)
```

## Contributing

We welcome contributions! Here's how you can help:

### How to Create a Pull Request

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/memeder.git
   cd memeder/backend
   ```

3. **Create a New Branch**
   ```bash
   git switch -C feature/your-feature-name
   # or
   git switch -C fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Test your changes thoroughly
   - Add proper validation and error handling

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```
   
   Commit message prefixes:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Docs:` for documentation changes

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Add a clear title and description
   - Submit the pull request

### Contribution Guidelines

- Ensure your code follows the project's coding standards
- Write meaningful commit messages
- Add proper input validation for new endpoints
- Update documentation if needed
- Test your changes before submitting
- Be respectful and constructive in discussions

## Learn More

To learn more about the technologies used in this project:

- [Express.js Documentation](https://expressjs.com/) - Learn about Express features and API
- [MongoDB Documentation](https://docs.mongodb.com/) - Learn about MongoDB and Mongoose
- [JWT Documentation](https://jwt.io/) - Learn about JSON Web Tokens
- [Express Validator](https://express-validator.github.io/) - Learn about input validation

## Available Scripts

### `npm run dev`
Runs the server in development mode with nodemon at [http://localhost:3000](http://localhost:3000)

### `npm start`
Runs the server in production mode

### `npm test`
Runs the test suite (placeholder for future implementation)

## Project Structure

```
backend/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── lib/
│   └── db.js            # MongoDB connection
├── middleware/
│   ├── auth.js          # JWT authentication middleware
│   ├── errorHandler.js  # Error handling middleware
│   └── validation.js    # Input validation rules
├── models/
│   ├── User.js          # User schema
│   └── Meme.js          # Meme schema
├── routes/
│   ├── auth.js          # Authentication routes
│   └── memes.js         # Meme management routes
└── utils/
    └── jwt.js           # JWT utility functions
```

## Deployment

### Deploy on Railway/Heroku

1. Push your code to GitHub
2. Connect your repository to Railway/Heroku
3. Add environment variables in the dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/memeder
JWT_SECRET=your-production-secret-key
JWT_EXPIRES_IN=7d
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```
