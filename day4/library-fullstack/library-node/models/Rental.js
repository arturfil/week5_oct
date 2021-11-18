const { Schema, model } = require('mongoose');

const rentalSchema = Schema(
  {
    user: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    book: {type: Schema.Types.ObjectId, require: true, ref: "Book"}
  }
)

module.exports = model("Rentals", rentalSchema);