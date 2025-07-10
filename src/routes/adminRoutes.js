const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const {
  addCandidate,
  getResults,
} = require('../controllers/adminController');

// POST /api/admin/candidate
router.post('/candidate', authMiddleware, roleMiddleware('admin'), addCandidate);

// GET /api/admin/results
router.get('/results', authMiddleware, roleMiddleware('admin'), getResults);

module.exports = router;
