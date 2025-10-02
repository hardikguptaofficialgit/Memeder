# Memeder Backend API

A Node.js/Express backend for the Memeder meme-sharing application with JWT authentication, MongoDB integration, and comprehensive input validation.

## Features

### 🔐 Authentication
- User registration and login with JWT tokens
- Password hashing with bcrypt
- Cookie-based authentication
- Protected routes middleware
- Input validation for all auth endpoints

### 🎭 Meme Management
- Create, read, update, delete memes
- Image URL storage and validation
- Meme tagging system
- User-specific meme tracking
- Like/dislike functionality

### ✅ Input Validation
- Express-validator for all endpoints
- Email format validation
- Password strength requirements
- Username uniqueness checks
- Comprehensive error handling

### 🛡️ Security & Middleware
- CORS configuration
- Cookie parsing
- Error handling middleware
- Request validation middleware
- MongoDB connection management

## Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcryptjs
- **Validation**: Express-validator
- **Environment**: dotenv for config management

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the backend root:
   ```env
   PORT=3000
   MONGODB_URI=MONGO_ATLAS_URL
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```

3. **Start the server**
   ```bash
   # Development mode (with nodemon)
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Body Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | username, email, password |
| POST | `/login` | User login | email, password |
| POST | `/logout` | User logout | None |
| GET | `/profile` | Get user profile | None (Auth required) |

### Meme Routes (`/api/memes`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get random memes for swiping | Yes |
| POST | `/` | Create new meme | Yes |
| GET | `/:id` | Get specific meme | Yes |
| PUT | `/:id` | Update meme | Yes |
| DELETE | `/:id` | Delete meme | Yes |
| POST | `/:id/swipe` | Swipe on meme (like/dislike) | Yes |

## Project Structure

```
backend/
├── index.js              # Main server file
├── package.json           # Dependencies and scripts
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

## Data Models

### User Schema
- `username`: Unique, 3-20 characters
- `email`: Valid email format, unique
- `password`: Minimum 6 characters (hashed)
- `swipes`: Array of meme interactions

### Meme Schema
- `title`: Required, max 100 characters
- `imageUrl`: Required valid URL
- `description`: Optional, max 500 characters
- `tags`: Array of lowercase strings
- `createdBy`: Reference to User
- `likes/dislikes`: Counters for interactions

## Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

### Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGODB_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_EXPIRES_IN` | Token expiration time | 7d |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:3000 |

## Error Handling

The API uses standardized error responses:
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed validation errors"]
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `404` - Not Found
- `500` - Server Error