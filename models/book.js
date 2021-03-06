const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    author: {
        type: [],
        required: true
    },
    description: {
        type: "String"
    },
    href: {
        type: "String"
    },
    thumbnail: {
        type: "String"
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;