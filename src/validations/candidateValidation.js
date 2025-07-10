const Joi = require('joi');

exports.candidateSchema = Joi.object({
  name: Joi.string().min(2).required(),
  party: Joi.string().min(2).required(),
});
