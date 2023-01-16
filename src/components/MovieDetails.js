import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Context } from './Context';

import noImage from '../Images/noimage.png';
import NavigationBar from './Navigation';
const API_IMG = 'https://image.tmdb.org/t/p/w500';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(45deg, black, transparent);
  background-color: #023c3c;
  align-items: center;
  height: calc(100vh - 54px);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;
  }
`;
const SideDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const InfoDiv = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  padding: 0px 30px 0px 0px;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 10px 20px;
    text-align: justify;
  }
  span {
    font-size: 23px !important;
    color: #fc4343;
    font-weight: 600;
  }
  p {
    font-size: 26px;
    color: white;
    @media screen and (min-width: 768px) and (max-width: 1400px) {
      margin: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1000px) {
      font-size: 22px;
    }
  }
`;
const MovieImg = styled.img`
  width: 60%;
  height: 90%;
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    height: 70%;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(Context);
  function LoadDetails() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }
  useEffect(() => {
    LoadDetails();
  }, []);
  return (
    <>
      <NavigationBar />
      <Container>
        <SideDiv>
          <MovieImg
            src={movie.poster_path ? API_IMG + movie.poster_path : noImage}
          />
        </SideDiv>
        <SideDiv>
          <InfoDiv>
            <p>
              <span>Title: </span>
              {movie.title}
            </p>

            <p>
              <span>Duration:</span> {movie.runtime}mins
            </p>
            <p>
              <span>Release date:</span> {movie.release_date}
            </p>
            <p>
              <span>Rating:</span> {movie.vote_average}
            </p>

            <p>
              <span>Description:</span> {movie.overview}
            </p>
          </InfoDiv>
        </SideDiv>
        {/* <p>
        Details - {id}
        <Link onClick={() => setLoading(false)} to='/'>
          sada
        </Link>
      </p> */}
      </Container>
    </>
  );
};

export default MovieDetails;
