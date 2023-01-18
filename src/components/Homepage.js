import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import NavigationBar from './Navigation';
import MoviesContainer from './MoviesContainer';
import ButtonSideBar from './ButtonSideBar';
import QueryButtonContainer from './QueryButtonContainer';
import LoadingSpinner from './LoadingSpinner';
import { Context } from './Context';
import Login from './Login';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Homepage = () => {
  const { loading } = useContext(Context);
  useEffect(() => {
    if (loading) {
      document.querySelector('.loading-spinner').style.opacity = 0.5;
      document.querySelector('.loading-spinner').style.display = 'flex';
    } else {
      document.querySelector('.loading-spinner').style.opacity = 0;
      document.querySelector('.loading-spinner').style.display = 'none';
    }
  }, [loading]);
  return (
    <>
      <NavigationBar />
      <Main>
        <QueryButtonContainer />
        <ButtonSideBar />
        <MoviesContainer />
        <LoadingSpinner />
      </Main>
      <Login />
    </>
  );
};

export default Homepage;
