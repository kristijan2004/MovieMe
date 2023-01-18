import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Provider } from './components/Context';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className='App'>
      <Provider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/details/:id' element={<MovieDetails />} />
          <Route path='*' element={<p>error page</p>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
