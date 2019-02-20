import React from 'react';
import axios from 'axios';

class ReviewedBook extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    const id = this.props.location.state.id;
    console.log("id of this one is this: ",id);
    this.setState({loading: true}, ()=>{
      const token= localStorage.getItem('jwt');
      const reqOptions = {
        headers:{
            Authorization:token
        }
      }
      axios.get(`http://localhost:3300/api/reviews/${id}`, reqOptions)
        .then(response => {
          console.log("Response from get", response);
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  render(){
    console.log(this.props.location.state);
    return(
      <div> Reviewed Book: {this.props.location.state.id}</div>
    )
  }
}

export default ReviewedBook;
