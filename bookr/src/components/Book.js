import React from 'react';
import styled from 'styled-components';


 const BookContainer = styled.div`
  width: 300px;
 `;

const Book = props => {
  console.log(props.book);
  const book = props.book;
  const imageLink = props.book.image;
  return(
    <BookContainer>
      { imageLink ? <img src={book.image} alt={book.title}/> : "No Thumbnail Found"}
      <h1> {book.title} </h1>
      <h2> {book.author} </h2>
    </BookContainer>
  )
}

export default Book;
