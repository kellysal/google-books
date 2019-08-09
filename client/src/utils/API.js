import axios from "axios";
require("dotenv").config();
const API_KEY = "AIzaSyCJbVVleX79TTqQQEsZNH5Y1E66GuZ8-kk";

export default {
    // Get all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Get book with id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Save a book to db
    saveBook: function (bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    },
    // Delete a book with id
    deleteBook: function (id) {
        // console.log(bookData);
        return axios.delete("/api/books/" + id);
    },
    searchBook: function (bookData) {
        console.log(bookData);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookData}&key=${API_KEY}`);
    }
};