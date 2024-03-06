// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import React, { useEffect } from "react";
import { useState } from "react";


const apiUrl = "/api/books/";


const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
   }, []);

   const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(apiUrl + itemId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    };
    const updatedItems = books.filter((books) => books._id !== itemId);
    setBooks(updatedItems);
  };

  return (
    <div className="home">
      <div className="goals">
        {books.map((books) => (
          <BookDetails
         key={books._id}
         {...books}
        handleDelete={handleDeleteItem} 
        />
        ))}
      </div>
      <BookForm setBooks={setBooks} />
    </div>
  );
};

export default Home;
