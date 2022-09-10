const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    releseDate: { type: Date },
    director: { type: String },
    cast: [String],
    poster: { type: String },
    rating: { type: Number, min: 1, max: 10 },
    genre: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', MovieSchema);
