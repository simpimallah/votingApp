const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Candidate name is required'],
  },
  party: {
    type: String,
    required: [true, 'Party name is required'],
  },
  votes: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Candidate', candidateSchema);
