require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth');
const memeRoutes = require('./routes/memes');
const swipeRoutes=require('./routes/swipeRoutes');

// Import middleware
const { errorHandler, notFound } = require('./middleware/errorHandler');
const connectDB = require('./lib/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/assets/images', express.static(__dirname + '/assets/images'));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Meme Swipe API is running!',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/memes', memeRoutes);
app.use('/api/swipes',swipeRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
};

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});