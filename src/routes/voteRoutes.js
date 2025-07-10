const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { castVote } = require('../controllers/voteController');

// POST /api/vote
router.post('/', authMiddleware, castVote);

module.exports = router;
