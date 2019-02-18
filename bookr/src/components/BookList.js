import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
      review: [],
    }
  }

  componentDidMount(){
    this.setState({loading: true}, ()=>{
      const token= localStorage.getItem('jwt');
      const reqOptions = {
        headers:{
            Authorization:token
        }
      }
      axios.get('http://localhost:3300/api/reviews', reqOptions)
        .then(response => {
          console.log("Response from get", response);
        })
        .catch(error => {
          console.log(error)
        })
  })
}
  render(){
    return (
      <div>
        <BookListTitle> My Books </BookListTitle>
        <BooksContainer>
          { this.props.books.map(book => (
              <Book key={book.bookID} id={book.bookID} book={book} />
            ))}
        </BooksContainer>
      </div>

    )

  }

}

export default BookList;
