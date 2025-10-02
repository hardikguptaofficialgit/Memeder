# Memeder 🎭

Swipe right for laughs, left for meh! Memeder is a Tinder-like application for memes where you can discover, rate, and enjoy the best memes on the internet.

## 🌟 Project Overview

Memeder combines the addictive swiping mechanism of dating apps with the endless entertainment of memes. Users can swipe through a curated collection of memes, build their personal collection of favorites, and discover new content tailored to their humor preferences.

### Key Features

- 👆 **Swipe Interface** - Intuitive Tinder-like swiping for memes
- 🔐 **User Authentication** - Secure JWT-based login and registration
- ❤️ **Personal Collection** - Save and organize your favorite memes
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎯 **Smart Recommendations** - Algorithm-based meme suggestions
- 🚀 **Real-time Interactions** - Instant like/dislike tracking

## 🏗️ Tech Stack

### Frontend
- **React.js** - Modern UI library with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure authentication tokens
- **Express Validator** - Input validation middleware

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or cloud instance)
- **npm** or **yarn** package manager
- **Git** for version control

### 1. Clone the Repository

```bash
git clone https://github.com/MLSAKIIT/memeder.git
cd memeder
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
# PORT=3000
# MONGODB_URI=mongodb://localhost:27017/memeder
# JWT_SECRET=your-super-secret-jwt-key
# JWT_EXPIRES_IN=7d
# NODE_ENV=development
# CORS_ORIGIN=http://localhost:5173

# Start the backend server
npm run dev
```

Backend will run on [http://localhost:3000](http://localhost:3000)

### 3. Frontend Setup

```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

Frontend will run on [http://localhost:5173](http://localhost:5173)

### 4. Access the Application

Open your browser and visit [http://localhost:5173](http://localhost:5173) to start swiping memes!

## 📁 Project Structure

```
memeder/
├── README.md                 # This file
├── .gitignore               # Git ignore rules
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Static assets
│   │   └── ...
│   ├── public/             # Public assets
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend-specific documentation
└── backend/                # Express backend API
    ├── routes/             # API route handlers
    ├── models/             # Database models
    ├── middleware/         # Custom middleware
    ├── lib/               # Database connection
    ├── utils/             # Utility functions
    ├── package.json       # Backend dependencies
    └── README.md          # Backend-specific documentation
```

## 🔧 Development

### Running Both Servers Simultaneously

For development convenience, you can run both frontend and backend:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

### Environment Configuration

#### Backend Environment Variables
Create `backend/.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/memeder
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

#### Frontend Configuration
The frontend automatically connects to `http://localhost:3000` for API calls in development mode.

### Available Scripts

#### Backend Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (placeholder)
```

#### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help make Memeder even better:

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository
   - This creates your own copy of the project

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/memeder.git
   cd memeder
   ```

3. **Create a Feature Branch**
   ```bash
   git switch -C feature/your-feature-name
   # or for bug fixes
   git switch -C fix/your-bug-fix
   ```

4. **Set Up Development Environment**
   ```bash
   # Install dependencies for both frontend and backend
   cd backend && npm install
   cd ../frontend && npm install
   ```

5. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style and patterns
   - Add comments for complex logic
   - Test your changes thoroughly

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

   **Commit Message Convention:**
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for improvements to existing features
   - `Docs:` for documentation changes
   - `Style:` for formatting changes
   - `Refactor:` for code refactoring

7. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Provide a clear title and description
   - Link any related issues
   - Submit the pull request

### Contribution Guidelines

- **Code Quality**: Write clean, maintainable code with proper error handling
- **Testing**: Test your changes across different browsers and devices
- **Documentation**: Update relevant documentation for new features
- **Respect**: Be respectful and constructive in all interactions
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution

- 🐛 **Bug Fixes** - Help identify and fix issues
- ✨ **New Features** - Add exciting new functionality
- 📱 **UI/UX Improvements** - Enhance user experience
- 🔧 **Performance** - Optimize app performance
- 📚 **Documentation** - Improve project documentation
- 🧪 **Testing** - Add automated tests

## 📚 Learn More

### Documentation
- [Frontend README](./frontend/README.md) - React app documentation
- [Backend README](./backend/README.md) - API documentation

### Technology Resources
- [React Documentation](https://react.dev/) - Learn React
- [Express.js Guide](https://expressjs.com/) - Backend framework
- [MongoDB Manual](https://docs.mongodb.com/) - Database documentation
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 🚢 Deployment

### Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the frontend and deploy

### Backend Deployment (Railway/Heroku)
1. Push your code to GitHub
2. Connect to [Railway](https://railway.app) or [Heroku](https://heroku.com)
3. Set environment variables in the dashboard
4. Deploy automatically on push to main

### Environment Variables for Production
Make sure to set these in your deployment platform:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - A secure secret key
- `CORS_ORIGIN` - Your frontend domain
- `NODE_ENV=production`

## 🙋‍♀️ Support

If you have any questions or need help:

- 📧 **Email**: Create an issue on GitHub
- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Bug Reports**: Create detailed issue reports
- 💡 **Feature Requests**: Suggest new features via issues


**Happy Swiping! 🎭✨**