// https://scotch.io/courses/10-react-challenges-beginner/fetch-and-display-from-an-api
// # The Challenge: Fetch List from API
// Data received from APIs are usually in JSON format are parsed to standard JavaScript objects. Lists from APIs, when parsed, is usually an array of objects containing individual data.

// The main tasks of this challenge are:

// Fetch data from an API when the "Fetch Data" button is clicked.
// Render details from the data returned.

// This challenge is completed in 4 steps:

// Install dependencies.
// Create a state variable to hold data.
// Make a data request.
// Render returned data.

import React, { useState } from 'react';
import axios from 'axios';
import './ch7.css';

function Seven() {
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const [books, setBooks] = useState([]);

  const fetchData = async () => {
      const response = await axios.get(apiURL);
      setBooks(response.data);

  }

  return (
    <div className="Seven">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
          {
            //   books &&
              books.map((book, index) => {
                  const cleanedDate = new Date(book.released).toDateString();
                  const authors = book.authors.join(', ');

                  return (
                    <div className="book" key={index}>
                        <h3>Book {index + 1}</h3>
                        <h2>{book.name}</h2>

                        <div className="details">
                            <p>👨: {authors}</p>
                            <p>📖: {book.numberOfPages} pages</p>
                            <p>🏘️: {book.country}</p>
                            <p>⏰: {cleanedDate}</p>
                        </div>
                    </div>
                  )
              })
          }

      </div>

    </div>
  );
}

export default Seven;
