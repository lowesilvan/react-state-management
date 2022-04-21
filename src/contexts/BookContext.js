import React, { createContext, useState } from 'react';
import { uniqueId } from 'lodash';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: uniqueId() },
    { title: "the final empire", author: "brandon sanderson", id: uniqueId() },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uniqueId()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;