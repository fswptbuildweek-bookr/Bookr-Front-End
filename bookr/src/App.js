import React, { Component } from 'react';
import './App.css';

const userBooks = {
  books: [
    {"title": "Test book",
    "author": "Book Author",
    "publisher": "Columbia books",
    "image": "http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721Zj_q3mq62Uoto-yeCuhEA3H4feL1rQiv9BniDBFGeQAZksGdXKv6th9kCcIDG2oiDiliAH3aO5__kiJdFntKktEzNxj5n6YYo7fHm7_mbasbdDcOyds6LX46cYzEprCX7bVG&source=gbs_api",
    "review": [
      {"username": "MLopez",
      "review": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"},
      {"username": "Panda_boi",
      "review": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt panda panda panda"}
    ]},
    {"title": "Reviewed Book",
    "author": "JK Rowling",
    "publisher": "Penguin books",
    "image": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "review": [
      {"username": "coca-cola",
      "review": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"},
      {"username": "pepsi",
      "review": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt panda panda panda"}
    ]},

  ]

}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchInput: '',
      searchResult: [],
      reviewedBooks: [],
    }
  }

  componentDidMount(){
    this.setState({
      reviewedBooks: userBooks
    })
  }


  render() {
    console.log(this.state.reviewedBooks)
    return (
      <div className="App">
        <h1> Search Component Goes Here</h1>
      </div>
    );
  }
}

export default App;
