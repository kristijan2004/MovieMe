import React, { useContext, useEffect } from 'react';
import { Context } from './Context';
import LoadingSpinner from './LoadingSpinner';

import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  async function LoadDetails() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=534704e3c67d5d10bd7ebbe2f8c20c43&language=en-US`
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    LoadDetails();
  }, []);
  return (
    <>
      <p>
        Details - {id}
        <Link onClick={() => setLoading(false)} to='/'>
          sada
        </Link>
      </p>
      <LoadingSpinner />
    </>
  );
};

export default MovieDetails;
