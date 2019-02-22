import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const ModalDiv = styled.div`
  margin-top: 15px;
  color: white;
  top: 50;
  z-index: 10000;
  background: rgb(0,0,0);
  width: 700px;
  height: 800px;
  border: 1px solid black;
  border-radius: 10px;
  display: ${props => props.display};
`;

const ModalButton = styled.button`
  align-items: center;
  font-size: 1.5em;
  position: absolute;
  margin-bottom: 30px;
  padding: 15px 70px;
  bottom: 0;
  right: 10%;
  border-radius: 20px;
`;

const StarRatingDiv= styled.div`
  display: block;
  width: 250px;
  margin: 0 auto;

`;

const EditText = styled.textarea`
  font-size: 1.9em;
`;

const ConfirmButton = styled.button`
  padding: 10px 15px;
  font-size: 1.3em;
  margin-top: 20px;
`;

class EditModal extends React.Component{
  constructor(props){
    super(props)
    this.state={
      content: '',
      rating: 0,
      reviewer: '',
      bookId: 0,
      reviewId: 0,
      error: ''
    }

  }

  componentDidMount(){
    const { bookId, reviewer, rating, content, id } = this.props;
    this.setState({
      content: content,
      rating: rating,
      reviewer: reviewer,
      bookId: bookId,
      reviewId: id,
      error: ''

    })
  }

  onChangeReviewHandler = e => {
    this.setState({
      content: e.target.value
    })
  }

  changeRating = (newRating) => {
    console.log(newRating);
    this.setState({ rating: newRating})
  }

  editReview = e => {
    const currentUser = localStorage.getItem('user');
    const reviewer = this.state.reviewer;
    if (currentUser === reviewer){
      const token= localStorage.getItem('jwt');
      const reqOptions = {
        headers:{
            Authorization:token
        }
      }
      const reviewId = this.state.reviewId
      const review ={
        content: this.state.content,
        rating: this.state.rating,
        book_id: this.state.bookId
      }
      this.props.editReview(reviewId, review, reqOptions);
      window.location.reload();

    } else {
      this.setState({
        error: 'User can only edit their own post'
      })
    }

  }

  render(){

    return(
      <ModalDiv display={this.props.show}>
        {this.state.error ? <h1> {this.state.error}</h1> : null }
        <h1> Edit Review</h1>
        <h2> Reviewer: {this.state.reviewer} </h2>
        <StarRatingDiv>
        <ReactStars
          count={5}
          onChange={this.changeRating}
          color2={'#E57452'}
          size={55}
          value={this.state.rating}/>
        </StarRatingDiv>
        <EditText  rows="10" cols="35" value={this.state.content}
        name="content" onChange={this.onChangeReviewHandler}></EditText>
        <div>
        <ConfirmButton onClick={this.editReview}> Confirm Edit </ConfirmButton>
        </div>


        <ModalButton onClick={this.props.handleClose}> Cancel</ModalButton>
      </ModalDiv>
    )
  }
}

export default EditModal;
