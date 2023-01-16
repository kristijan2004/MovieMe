import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationBar from './Navigation';
import MoviesContainer from './MoviesContainer';
import ButtonSideBar from './ButtonSideBar';
import QueryButtonContainer from './QueryButtonContainer';
import LoadingSpinner from './LoadingSpinner';
import { Context } from './Context';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Homepage = () => {
  const { loading } = useContext(Context);
  return (
    <>
      <NavigationBar />
      <Main>
        <QueryButtonContainer />
        <ButtonSideBar />
        <MoviesContainer />
        <LoadingSpinner />
      </Main>
    </>
  );
};

export default Homepage;
