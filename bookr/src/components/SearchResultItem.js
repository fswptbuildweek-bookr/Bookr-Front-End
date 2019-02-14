import React from 'react';
import styled from 'styled-components';

const BookDiv = styled.div`
  display: inline-block;
  width: 400px;
  margin-bottom: 15px;
`;

const BookTitle = styled.h5`
  font-size: .5em;
`;

const ReviewItButton = styled.button`
  background-color: #D82B21;
  padding: 10px 15px;
`;
const SearchResultItem = props => {
  console.log(props.book)

  const book = props.book.volumeInfo;
  const title = book.title;
  const authors = book.authors;
  console.log(typeof(authors))
  const imageLink = book.imageLinks;

  return (

    <BookDiv>
      { imageLink ? <img src={book.imageLinks.smallThumbnail} alt={book.title}/> : "No Thumbnail Found"}
      <BookTitle> {title? title : "no title"}</BookTitle>
      <h2>{authors? authors[0] : "Author Unknown"}</h2>
      <ReviewItButton> Review It </ReviewItButton>
    </BookDiv>
  )
}


export default SearchResultItem
