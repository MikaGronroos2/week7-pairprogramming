import { useState, useEffect } from 'react';

export const useBooks = ({ title, author, genre, setBooks }) => {
    const apiUrl = "/api/books";
    const handleBooks = async (e) => {
        e.preventDefault();
        console.log(e)
        try {
            const newBook = {
                title,
                author,
                genre,
            };
            
            const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(newBook),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(response, newBook, data);
            if (response.ok) {
                setBooks((prevBooks) => [data, ...prevBooks]);
            }

        } catch (error) {
            console.log(error);
        }
        };
        return { handleBooks };
    }
