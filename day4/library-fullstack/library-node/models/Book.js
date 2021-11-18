const { Schema, model } = require('mongoose');

const bookSchema = Schema(
  {
    title: {type: String, required: true},
    author: {type: String, required: true},
    numberOfPages: {type: Number, required: true},
    genres: {type: String, required: true}
  }
)

module.exports = model("Book", bookSchema);