import React from 'react';
import styled from 'styled-components';
import SearchResultItem from './SearchResultItem';
import { BookListTitle } from './BookList';

const SearchResultContainer = styled.div`
  background-color: #0741ad;
  overflow-x: scroll;
  overflow-y: none;
  white-space: nowrap;
  padding: 10px;

  &::-webkit-slider-thumb{
    background-color: #4CAF50;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

`;

const SearchResultComponent = props => {
  console.log(props.searchResult)
  return(
    <SearchResultContainer>
      <BookListTitle> Search Results </BookListTitle>
      { props.searchResult.map(book => (
        <SearchResultItem key={book.id} book ={book}/>
      ))}
    </SearchResultContainer>
  )
}

export default SearchResultComponent;
