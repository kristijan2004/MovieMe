import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Provider } from './components/Context';

function App() {
  return (
    <div className='App'>
      <Provider>
        <Homepage />
      </Provider>
    </div>
  );
}

export default App;
