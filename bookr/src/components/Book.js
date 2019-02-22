import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


 const BookContainer = styled.div`
  width: 300px;
  height: 600px;
  margin: 10px; 
 `;

const Book = props => {
  const book = props.book;
  const imageLink = props.book.image;
  return(
    <Link to={{pathname: `userpage/${props.book.id}`, state: { id: book.id, title: book.title, author: book.author, publisher: book.publisher, image: book.image}}}><BookContainer>
      { imageLink ? <img src={book.image} alt={book.title}/> : "No Thumbnail Found"}
      <h1> {book.title} </h1>
      <h2> {book.author} </h2>
    </BookContainer></Link>
  )
}

export default Book;
