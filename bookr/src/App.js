import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchInput: '',
      searchResult: [],
    }
  }


  render() {
    return (
      <div className="App">
        <h1> Search Component Goes Here</h1>
      </div>
    );
  }
}

export default App;
