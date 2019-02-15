import React from 'react';
import styled from 'styled-components';

const BookDiv = styled.div`
  display: inline-block;
  width: 450px;
  margin-bottom: 15px;
`;

const BookTitle = styled.h3`
`;

const BookInfo = styled.h4`
`;


const ReviewItButton = styled.button`
  background-color: #D82B21;
  padding: 10px 15px;
`;
const SearchResultItem = props => {
  const book = props.book.volumeInfo;
  const title = book.title;
  const authors = book.authors;
  const publisher = book.publisher;
  const imageLink = book.imageLinks;

  return (
    <BookDiv>
      { imageLink ? <img src={book.imageLinks.smallThumbnail} alt={book.title}/> : "No Thumbnail Found"}
      <BookTitle> {title? title.substring(0,40): "no title"}</BookTitle>
      <BookInfo>{authors? authors[0] : "Author Unknown"}</BookInfo>
      <BookInfo> {publisher? publisher: "Publisher Unkown"}</BookInfo>
      <ReviewItButton> Review It </ReviewItButton>
    </BookDiv>
  )
}


export default SearchResultItem
