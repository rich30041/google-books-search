  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  // authors: [{type: String, required: true}],
  authors: [{type: String, default: "None"}],
  description: {type: String, default: "None"},
  image: {type: String, trim: true, default: "None"},
  link: {type: String, trim: true, default: "None"},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;