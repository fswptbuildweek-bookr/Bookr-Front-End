import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../public/images/logo.png';

import SearchInputComponent from './SearchInputComponent';

const NavigationContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

`;

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
`;


const Navigation = props => {
  return(
    <NavigationContainer>
      <ImageContainer>
        <Link to="/userpage" ><img src={logo} alt="Logo" /></Link>
      </ImageContainer>
      <SearchInputComponent
      getBookByTitle={props.getBookByTitle}
      searchInput={props.searchInput}
      updateSearch={props.updateSearch} />
    </NavigationContainer>
  )
}

export default Navigation;
