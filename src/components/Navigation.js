import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

const NavigationMain = styled.div`
  display: flex;
  background-color: #fc4343;
  font-size: 17px;
  justify-content: space-between;
`;
const Logo = styled.a`
  width: 200px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  background-color: #c83232;
  margin: 0;
  padding: 15px 10px;
  text-align: center;
  font-weight: 600;
  color: white;
  text-decoration: none;
  @media only screen and (max-width: 550px) {
    font-size: 15px;
    width: 100px;
  }
`;
const Search = styled.form`
  width: 60%;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    content: 'Search Movies';
    width: 100px;
    height: 0px;
    color: white;
    font-size: 13px;
    position: absolute;
    top: 20px;
    left: 5px;
    transition: 0.6s;
  }
  /* &:focus-within {
    input {
    }
    &::before {
    }
  } */
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  width: 250px;
  display: inline-block;
  position: relative;
  &::before {
    content: 'asd';
    display: inline-block;
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: white;
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
  function Blur(e) {
    if (e.keyCode == 13) {
    }
  }
  return (
    <NavigationMain>
      <Logo id='logo' href='/'>
        MovieMe
      </Logo>
      <Search
        id='form'
        onFocus={() => document.getElementById('form').classList.add('top')}
        onBlur={() => document.getElementById('form').classList.remove('top')}
        onSubmit={(e) => {
          e.preventDefault();
          FetchMovie();
          document.getElementById('form').classList.remove('top');
        }}
      >
        <Input
          type='text'
          id='searchInput'
          onKeyUp={(e) => e.keyCode === 13 && e.target.blur()}
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
