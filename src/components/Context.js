import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext({});

export const Provider = (props) => {
  const genreList = [
    { genre: 'Action,', number: 28 },
    { genre: 'Adventure,', number: 12 },
    { genre: 'Animation,', number: 16 },
    { genre: 'Comedy,', number: 35 },
    { genre: 'Crime,', number: 80 },
    { genre: 'Documentary,', number: 99 },
    { genre: 'Drama,', number: 18 },
    { genre: 'Family,', number: 10751 },
    { genre: 'Fantasy,', number: 14 },
    { genre: 'History,', number: 36 },
    { genre: 'Horror,', number: 27 },
    { genre: 'Music,', number: 10402 },
    { genre: 'Mystery,', number: 9648 },
    { genre: 'Romance,', number: 10749 },
    { genre: 'Science Fiction,', number: 878 },
    { genre: 'TV Movie,', number: 10770 },
    { genre: 'Thriller,', number: 53 },
    { genre: 'War,', number: 10752 },
    { genre: 'Western,', number: 37 }
  ];
  const API_URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&lang=en&page=1';
  const API_SEARCH =
    'https://api.themoviedb.org/3/search/movie?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&query=';
  const [movies, setMovies] = useState([]);
  const [paginatedMovies, setPaginatedMovies] = useState([]);
  const [paginateButtons, setPaginateButtons] = useState(0);
  const [page, setPage] = useState(1);
  const [genreOrPopular, setGenreOrPopular] = useState('top_rated');
  const [inputValue, setInputValue] = useState('');
  const [genreToggle, setGenreToggle] = useState(false);
  const [title, setTitle] = useState('');
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  useEffect(() => {
    paginate(movies, 1);
  }, [movies]);
  useEffect(() => {
    genreOrPopular === 'top_rated'
      ? FetchMoviesBy(genreOrPopular, page)
      : genreOrPopular === 'popular'
      ? FetchMoviesBy(genreOrPopular, page)
      : genreOrPopular === 'upcoming'
      ? FetchMoviesBy(genreOrPopular, page)
      : FetchMovieByGenre(genreOrPopular, page);
  }, [page]);
  useEffect(() => {
    if (page === 1) {
      document.getElementById('prevBtn').setAttribute('disabled', true);
      document.getElementById('prevBtn').style.opacity = 0.5;
    } else {
      document.getElementById('prevBtn').removeAttribute('disabled');
      document.getElementById('prevBtn').style.opacity = 1;
    }
  }, [page]);
  const onChangeInputValue = (e) => {
    setInputValue(e);
  };
  const FetchMoviesBy = (ratedOrPopular, pages) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${ratedOrPopular}?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&lang=en&page=${pages}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  const FetchMovieByGenre = (genre, page) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&with_genres=${genre}&page=${page}&lang=en&sort_by=original_title.asc`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  const FetchMovie = () => {
    fetch(`${API_SEARCH + inputValue}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    document.getElementById('searchInput').value = '';
  };
  const GenreGenerator = (genreIdFromMovie) => {
    let genre = '';

    genreIdFromMovie.forEach((element) => {
      let generatedGenre = genreList.find((el) => el.number === element);
      genre += generatedGenre.genre;
    });

    return genre.replaceAll(',', ' | ').slice(0, -2);
  };
  const paginate = (items, pageNumber) => {
    const pageSize = 10;
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, items.length - 1);
    let paginatedArr = items.slice(startIndex, endIndex + 1);
    setPaginatedMovies(paginatedArr);
    let PrevNextButtons = Math.ceil(items.length / pageSize);
    setPaginateButtons(PrevNextButtons);
  };
  const FetchGenreOrPopular = (prevNext) => {
    console.log(page);
  };
  return (
    <Context.Provider
      value={{
        movies,
        inputValue,
        setInputValue,
        onChangeInputValue,
        FetchMovie,
        GenreGenerator,
        FetchMoviesBy,
        genreList,
        FetchMovieByGenre,
        genreToggle,
        setGenreToggle,
        paginate,
        paginateButtons,
        paginatedMovies,
        title,
        setTitle,
        page,
        setPage,
        genreOrPopular,
        setGenreOrPopular,
        FetchGenreOrPopular
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
