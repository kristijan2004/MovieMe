import React, { useContext, useEffect } from 'react';
import { Context } from './Context';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import arrow from '../Images/arrow.png';

const Test = styled.div`
  display: flex;
  flex-grow: 1;
`;
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-grow: 1;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1050px;
  @media only screen and (min-width: 1500px) {
    max-width: 1260px;
  }
`;
const Title = styled.h2`
  padding: 0;
  text-align: left;
  margin: 2px;
  color: white;
  padding-top: 15px;
`;
const Btn = styled.button`
  position: sticky;
  top: 50%;
  width: 45px;
  height: 45px;
  background-size: cover;
  left: 0;
  background-image: url(${(props) => props.img});
  background-color: transparent;
  border: none;
  transform: rotate(${(props) => props.opposite});
  cursor: pointer;
  transition: 0.6s;
`;

const MoviesContainer = (props) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500';
  const { title } = useContext(Context);
  const { movies, paginateButtons, page, setPage, setLoading } =
    useContext(Context);
  const buttonsArr = Array.from({ length: paginateButtons }, (v, i) => i);
  useEffect(() => {
    if (page === 1) {
      document.getElementById('prevBtn').setAttribute('disabled', true);
      document.getElementById('prevBtn').style.opacity = 0.5;
    } else {
      document.getElementById('prevBtn').removeAttribute('disabled');
      document.getElementById('prevBtn').style.opacity = 1;
    }
  }, [page]);
  return (
    <Test>
      <Btn
        img={arrow}
        id='prevBtn'
        onClick={() => (
          setPage(page - 1),
          window.scrollTo({ top: 100, left: 100, behavior: 'smooth' })
        )}
      ></Btn>
      <MainCont>
        <Title>{title ? title.slice(0, -1) : 'Top Rated Movies'}</Title>
        <Container>
          {movies.map((el) => (
            <MovieCard
              key={el.id}
              img={el.poster_path}
              name={el.title}
              genre={el.genre_ids}
              vote={el.vote_average}
              id={el.id}
            />
          ))}
        </Container>
        {/* <BtnContainer>
        {buttonsArr.map((el) => (
          <button onClick={() => paginate(movies, el + 1)}>{el + 1}</button>
        ))}
      </BtnContainer> */}
      </MainCont>
      <Btn
        img={arrow}
        opposite='180deg'
        onClick={() => (
          setPage(page + 1),
          window.scrollTo({ top: 100, left: 100, behavior: 'smooth' })
        )}
      ></Btn>
    </Test>
  );
};

export default MoviesContainer;
