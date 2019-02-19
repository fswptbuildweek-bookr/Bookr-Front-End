import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactStars from 'react-stars';


const BookReviewContainer = styled.div`
  h1{
    display: inline-block;
    padding: 10px 15px;
    color: #0741ad;
    background: #D3D3D3;
  }
`;

const BookReviewAllDataDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;`;

const BookInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: start;`;

const BookImageDiv = styled.div`
margin: 25px 50px;`;

const BookImage = styled.img`
width: 300px;`;

const BookTextInfo = styled.div`
  h1{
    padding: 0px 5px;
    background: #FFF;
    color:  #E57452;
  }
`;

const ReviewBodyContainer = styled.div`
  text-align: center;
  align-items: center;
`;

const PublishReviewButton = styled.div`
padding: 15px 15px;
font-size: 1.3em;
color: #F5F5F5;
background: #0741AD;
border-radius: 10px;`
class ReviewComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: '',
      author: '',
      publisher: '',
      image: '',
      review: "",
      rating: 0
    }
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount(){
    this.props.resetSearch();
    this.setState({
      title: this.props.location.state.title,
      author: this.props.location.state.authors[0],
      publisher: this.props.location.state.publisher,
      image: this.props.location.state.imageLink.thumbnail
    })
  }

  changeRating(newRating){
    console.log(newRating);
    this.setState({ rating: newRating})
  }

  onChangeReviewHandler = e => {
    this.setState({
      review: e.target.value
    })
  }


  publishReview = e => {
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      image: this.state.image,
      rating: {
        rating: this.state.rating,
        review: this.state.review
      }
    }
  }

  render(){
    return(
      <BookReviewContainer>
        <h1> Review A Book </h1>
        <BookReviewAllDataDiv>
          <BookInfoContainer>
            <BookImageDiv>
            <BookImage src={this.state.image} />
            </BookImageDiv>
            <BookTextInfo>
              <h1> Title: </h1>
              <h2> {this.state.title}</h2>
              <h1> Author: </h1>
              <h2> {this.state.author}</h2>
              <h1> Publisher: </h1>
              <h2> {this.state.publisher}</h2>
              <PublishReviewButton onClick={this.publishReview}> Publish Review </PublishReviewButton>
            </BookTextInfo>
          </BookInfoContainer>
          <ReviewBodyContainer>
            <h2> My Rating </h2>
            <ReactStars
              count={5}
              onChange={this.changeRating}
              color2={'#E57452'}
              size={55}
              value={this.state.rating}/>
            <textarea name="review" rows="30" cols="100" value={this.state.review} onChange={this.onChangeReviewHandler}></textarea>
          </ReviewBodyContainer>
        </BookReviewAllDataDiv>

      </BookReviewContainer>
    )
  }
}

export default ReviewComponent;
