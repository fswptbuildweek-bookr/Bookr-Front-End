import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const ModalDiv = styled.div`
  color: white;
  top: 50;
  z-index: 10000;
  background: rgb(0,0,0);
  width: 600px;
  height: 700px;
  border: 1px solid black;
  border-radius: 10px;
  display: ${props => props.display};
`;

const ModalButton = styled.button`
  align-items: center;
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

      const review ={
        content: this.state.content,
        rating: this.state.rating,
        review_id: this.state.reviewId,
        book_id: this.state.bookId
      }
      console.log(review);

      this.props.editReview();
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
        <textarea rows="15" cols="50" value={this.state.content}
        name="content" onChange={this.onChangeReviewHandler}></textarea>
        <div>
        <button onClick={this.editReview}> Confirm Edit </button>
        </div>


        <ModalButton onClick={this.props.handleClose}> Cancel</ModalButton>
      </ModalDiv>
    )
  }
}

export default EditModal;
