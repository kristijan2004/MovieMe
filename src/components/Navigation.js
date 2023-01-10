import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

const NavigationMain = styled.div`
  display: flex;
  background-color: #fc4343;
  font-size: 17px;
  justify-content: space-between;
`;
const Logo = styled.p`
  width: 200px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  background-color: #c83232;
  margin: 0;
  padding: 15px 10px;
  text-align: center;
  font-weight: 600;
  color: white;
  @media only screen and (max-width: 550px) {
    font-size: 15px;
    width: 100px;
  }
`;
const Search = styled.form`
  width: 60%;
  display: flex;
  align-items: center;
  input {
    border: none;
    background-color: transparent;
    color: white;
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: white;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;
const LogInButton = styled.button`
  border: none;
  padding: 0px 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  margin-right: 15px;
  @media only screen and (max-width: 550px) {
    font-size: 15px;
    margin-right: 0;
  }
`;

const NavigationBar = () => {
  const { onChangeInputValue, FetchMovie } = useContext(Context);
  return (
    <NavigationMain>
      <Logo>MovieMe</Logo>
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          FetchMovie();
        }}
      >
        <input
          placeholder='Search Movies'
          type='text'
          id='searchInput'
          autoComplete='off'
          onChange={(e) => onChangeInputValue(e.target.value)}
        />
        {/* <button onClick={(e) => FetchMovie()}>Click</button> */}
      </Search>
      <LogInButton>Log In</LogInButton>
    </NavigationMain>
  );
};

export default NavigationBar;
