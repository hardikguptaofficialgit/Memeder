const jwt = require('jsonwebtoken');


const generateToken = (userId) => {
  return jwt.sign(
    { userId }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};


const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};


const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 
  };
};


const setAuthCookie = (res, token) => {
  res.cookie('token', token, getCookieOptions());
};


const clearAuthCookie = (res) => {
  res.clearCookie('token', getCookieOptions());
};

module.exports = {
  generateToken,
  verifyToken,
  getCookieOptions,
  setAuthCookie,
  clearAuthCookie
};