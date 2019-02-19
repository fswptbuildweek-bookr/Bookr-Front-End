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
justify-content: space-around;`;

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

const BookSpan = styled.span`
color:  #E57452;`;
class ReviewComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      review: "",
      rating: 0
    }
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount(){
    this.props.resetSearch();
  }

  changeRating(newRating){
    console.log(newRating);
    this.setState({ rating: newRating})
  }



  render(){
    console.log(this.props);
    console.log(this.state);
    console.log(this.state.rating);
    console.log(this.props.location.state)
    const bookLocation = this.props.location.state
    return(
      <BookReviewContainer>
        <h1> Review A Book </h1>
        <BookReviewAllDataDiv>
          <BookInfoContainer>
            <BookImageDiv>
            <BookImage src={bookLocation.imageLink.thumbnail} />
            </BookImageDiv>
            <BookTextInfo>
              <h1> Title: </h1>
              <h2> {bookLocation.title}</h2>
              <h1> Author: </h1>
              <h2> {bookLocation.authors}</h2>
              <h1> Publisher: </h1>
              <h2> {bookLocation.publisher}</h2>
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
          </ReviewBodyContainer>
        </BookReviewAllDataDiv>

      </BookReviewContainer>
    )
  }
}

export default ReviewComponent;
