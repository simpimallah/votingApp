const Candidate = require('../models/Candidate');

/**
 * Returns all candidates sorted by vote count descending.
 * @returns {Promise<Array>} List of candidates
 */
const calculateResults = async () => {
  const results = await Candidate.find().sort({ votes: -1 });
  return results;
};

module.exports = calculateResults;
