const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: 'N/A' },
    releseDate: { type: Date, default: new Date() },
    director: { type: String, default: 'N/A' },
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
