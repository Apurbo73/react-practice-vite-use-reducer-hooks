import React, { useState } from "react";

const NewData = () => {
  const booksData = [
    { id: 1, name: "Apurbo " },
    { id: 2, name: "Bangladesh" },
    { id: 3, name: "Leading University" }
  ];
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    setBooks(previousData => {
      return [...previousData, newBook];
    });
    setBookName("");
  };
  return (
    <div>
      <h1>Data List</h1>
      {books.map(book => {
        const { id, name } = book;
        return (
          <h3 key={id}>
            {name}
          </h3>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter more info about you"
          value={bookName}
          onChange={e => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewData;
