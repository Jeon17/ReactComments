const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema desired for data being pulled from api for user's requested book
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// variable being set to a method in which mongoose will make it easier for MongoDB 
// to communicate with Node
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
