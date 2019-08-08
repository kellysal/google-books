import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../api/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Book List</h1>
                </Jumbotron>

                <Container fluid>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem
                                    key={book._id}
                                    title={book.title}
                                    author={book.author}
                                    href={book.href}
                                    thumbnail={book.thumbnail}
                                    description={book.description}
                                    deleteBook={() => this.deleteBook(book._id)}
                                />
                            ))}
                        </List>
                    ) : (
                            <h1 id="message" className="text-center">No Results To Display</h1>
                        )}
                </Container>
            </div>
        );
    }
}

export default Saved;