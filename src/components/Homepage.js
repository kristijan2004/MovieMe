import React from 'react';
import styled from 'styled-components';
import NavigationBar from './Navigation';
import MoviesContainer from './MoviesContainer';
import ButtonSideBar from './ButtonSideBar';
import QueryButtonContainer from './QueryButtonContainer';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <Main>
        <QueryButtonContainer />
        <ButtonSideBar />
        <MoviesContainer />
      </Main>
    </>
  );
};

export default Homepage;
