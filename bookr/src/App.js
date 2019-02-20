import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import SearchResultComponent from './components/SearchResultComponent';
import BookList from './components/BookList';
import LogInComponent from './components/LogInComponent';
import ReviewComponent from './components/ReviewComponent';
import ReviewedBook from './components/ReviewedBook';
import './App.css';

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchInput: '',
      searchResult: [],
      reviewedBooks: [],
      isLoggedIn: false,
      loops: 0
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
      axios.get('http://localhost:3300/api/books/all', reqOptions)
        .then(response => {
          console.log("Response from get", response);
          this.setState({reviewedBooks: response.data.books})
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  // componentDidUpdate(){
  //     const token= localStorage.getItem('jwt');
  //     const reqOptions = {
  //       headers:{
  //           Authorization:token
  //       }
  //     }
  //     axios.get('http://localhost:3300/api/books/all', reqOptions)
  //       .then(response => {
  //         this.setState({reviewedBooks: response.data.books})
  //       })
  //       .catch(error => {
  //         return error;
  //       })
  // }

  addBook(newReview, reqOptions) {
    axios.post('http://localhost:3300/api/reviews', newReview, reqOptions)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      })
  }

  updateSearch = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  getBookByTitle = title => {
    title = this.state.searchInput
    console.log(title);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${title}=${API_KEY}`)
      .then(response => {
        this.setState({
          searchResult: response.data.items
        })
      })
      .catch(error => {
        console.log(error)
      })

      this.setState({
        searchInput: ''
      })
  }

  resetSearch = () => {
    this.setState({
      searchResult: [],
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navigation
            resetSearch = {this.resetSearch}
            getBookByTitle={this.getBookByTitle}
            value={this.state.searchInput}
            updateSearch={this.updateSearch} />
          { this.state.searchResult.length !== 0 && <SearchResultComponent searchResult={this.state.searchResult}/>}
          <Route
            exact path="/"
            render={(props) => <LogInComponent {...props } />}
          />
          <Route
            exact path="/userpage"
            render={(props) => <BookList {...props } books={this.state.reviewedBooks} />}
          />
          <Route
            exact path="/userpage/:id"
            render={(props) => <ReviewedBook {...props }
            books = {this.state.reviewedBooks}
            addBook = {this.addBook}
            resetSearch = {this.resetSearch} />}
          />
          <Route
            exact path="/userpage/:id/review"
            render={(props) => <ReviewComponent {...props }
            addBook = {this.addBook}
            resetSearch = {this.resetSearch} />}
          />

        </div>
      </div>
    );
  }
}

export default withRouter(App);
