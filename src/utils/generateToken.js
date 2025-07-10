const jwt = require('jsonwebtoken');

/**
 * Generates a signed JWT token using user ID.
 * @param {String} userId - MongoDB ObjectId of the user.
 * @returns {String} JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token valid for 1 day
  });
};

module.exports = generateToken;
