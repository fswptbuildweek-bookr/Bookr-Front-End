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
class BookList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
    }
  }


  // AddBook(newReview, reqOptions) {
  //   axios.post('http://localhost:3300/api/reviews', newReview, reqOptions)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }


  render(){
    return (
      <div>
        <BookListTitle> My Books </BookListTitle>
        <BooksContainer>
          { this.props.books.map((book,index) => (
              <Book key={index} id={book.bookID} book={book} />
            ))}
        </BooksContainer>
      </div>

    )

  }

}

export default BookList;
