const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');

exports.castVote = async (req, res) => {
  try {
    const userId = req.user._id;
    const { candidateId } = req.body;

    const hasVoted = await Vote.findOne({ userId });
    if (hasVoted) {
      return res.status(400).json({ message: 'You have already voted' });
    }

    const vote = await Vote.create({ userId, candidateId });
    await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } });

    res.status(200).json({ message: 'Vote successfully cast', vote });
  } catch (error) {
    res.status(500).json({ message: 'Vote failed', error: error.message });
  }
};
