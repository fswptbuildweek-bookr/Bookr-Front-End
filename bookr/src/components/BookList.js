import React from 'react';
import styled from 'styled-components';
import Book from './Book';

export const BookListTitle = styled.h1`
  color: #E57452;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

`;
const BookList = props => {
  console.log(props.books);
  return (
    <div>
      <BookListTitle> My Books </BookListTitle>
      <BooksContainer>
        { props.books.map(book => (
            <Book key={book.bookID} id={book.bookID} book={book} />
          ))}
      </BooksContainer>


    </div>

  )
}

export default BookList;
