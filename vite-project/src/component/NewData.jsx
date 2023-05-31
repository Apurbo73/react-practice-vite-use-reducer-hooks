import React, { useState } from "react";
import Modal from "./Modal";

const NewData = () => {
  const booksData = [
    { id: 1, name: "Pather Pachali " },
    { id: 2, name: "Bela Sheshe" },
    { id: 3, name: "BongoBondhu" }
  ];
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    setBooks(previousData => {
      return [...previousData, newBook];
    });
    setIsModalOpen(true);
    setModalText(`Book ${bookName} is added`);
    setBookName("");
  };
  return (
    <div>
      <h1>Data List</h1>
      {books.map(book => {
        const { id, name } = book;
        return (
          <p key={id}>
            {name}
          </p>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter new book name"
          value={bookName}
          onChange={e => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {isModalOpen && <Modal modalText={modalText} />}
    </div>
  );
};

export default NewData;
