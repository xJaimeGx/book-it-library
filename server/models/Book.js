const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  bookId: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = bookSchema;