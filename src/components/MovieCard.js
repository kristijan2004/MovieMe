import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import { Link } from 'react-router-dom';
import noImage from '../Images/noimage.png';
const API_IMG = 'https://image.tmdb.org/t/p/w500';

var CardHeight = '18rem';

const MovieCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-basis: auto;
  flex-wrap: wrap;
  margin: 0px 5px;
  min-width: 200px;
  max-width: 200px;
  position: relative;
  @media (max-width: 425px) {
  }
`;
const MovieImg = styled.img`
  width: 100%;
  height: calc(${CardHeight} - 4rem);

  -webkit-box-shadow: 0px 0px 69px 3px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 0px 0px 69px 3px rgba(0, 0, 0, 0.74);
  box-shadow: 0px 0px 69px 3px rgba(0, 0, 0, 0.74);
`;
const MovieInfoCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;
const MovieName = styled.p`
  margin: 5px 0px 0px 0px;
  font-size: 14px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`;
const MovieInfo = styled.p`
  font-size: 11px;
  font-family: 'Raleway', sans-serif;
  margin: 0;
  text-align: center;
`;
const MovieRating = styled.p`
  font-family: 'Raleway', sans-serif;

  color: red;
  text-align: center;
  position: absolute;
  top: -11px;
  background-color: yellow;
  padding: 2px 4px;
  border-radius: 55px;
`;

const MovieCard = (props) => {
  const { GenreGenerator, setMovie } = useContext(Context);
  return (
    <Link to={`/details/${props.id}`} onClick={() => setMovie({})}>
      <MovieCont>
        <MovieImg
          src={props.img ? API_IMG + props.img : noImage}
          alt={props.name}
        />
        <MovieInfoCont>
          <MovieName>{props.name}</MovieName>
          <MovieRating>{props.vote}</MovieRating>
          <MovieInfo>{GenreGenerator(props.genre)}</MovieInfo>
        </MovieInfoCont>
      </MovieCont>
    </Link>
  );
};

export default MovieCard;
