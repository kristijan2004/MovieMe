import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import styled from 'styled-components';
import MovieCard from './MovieCard';
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
  const API_IMG = 'https://image.tmdb.org/t/p/w500';
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
