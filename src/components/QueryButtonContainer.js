import React, { useContext } from 'react';
import { Context } from './Context';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const QueryBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (min-width: 768px) {
  }
`;

const Btn = styled.button`
  width: 100%;
  border: none;
  text-align: center;
  color: white;
  background-color: transparent;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 17px;
  font-family: 'Raleway', sans-serif;
  padding: 1rem;
  position: relative;
  font-weight: 600;
  &:hover {
    background-color: #575757;
    color: red;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  div {
    text-align: center;
    button {
      border: none;
      cursor: pointer;
      color: white;
      background-color: transparent;
      border: 1px solid #c83232;
      margin: 2px;
      font-size: 17px;
      font-family: 'Raleway', sans-serif;
      &:hover {
        background-color: black;
        color: #c83232;
      }
      @media only screen and (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
`;

const QueryButtonContainer = () => {
  const {
    FetchMoviesBy,
    genreList,
    FetchMovieByGenre,
    setTitle,
    setGenreOrPopular,
    setPage
  } = useContext(Context);
  return (
    <Main>
      <QueryBtnContainer>
        <Btn
          onClick={() => {
            FetchMoviesBy('top_rated', 1);
            setTitle('Top Rated Movies,');
            setGenreOrPopular('top_rated');
            setPage(1);
          }}
        >
          rated
        </Btn>
        <Btn
          onClick={() => {
            FetchMoviesBy('popular', 1);
            setTitle('Most Popular,');
            setGenreOrPopular('popular');
            setPage(1);
          }}
        >
          popular
        </Btn>
        <Btn
          onClick={() => {
            FetchMoviesBy('upcoming', 1);
            setTitle('Upcoming Movies,');
            setGenreOrPopular('upcoming');
            setPage(1);
          }}
        >
          upcoming
        </Btn>
      </QueryBtnContainer>
      <GenreContainer>
        <div>
          {genreList.map((el) => (
            <button
              key={el.number}
              onClick={() => {
                FetchMovieByGenre(el.number, 1);
                setTitle(el.genre);
                setGenreOrPopular(el.number);
                setPage(1);
              }}
            >
              {el.genre.replaceAll(',', '')}
            </button>
          ))}
        </div>
      </GenreContainer>
    </Main>
  );
};

export default QueryButtonContainer;
