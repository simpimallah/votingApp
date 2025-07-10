const Candidate = require('../models/Candidate');
const calculateResults = require('../utils/calculateResults');

exports.addCandidate = async (req, res) => {
  try {
    const { name, party } = req.body;
    const candidate = await Candidate.create({ name, party, votes: 0 });
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Candidate creation failed', error: error.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await calculateResults();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch results', error: error.message });
  }
};
