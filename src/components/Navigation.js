import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import { Link } from 'react-router-dom';

const NavigationMain = styled.div`
  display: flex;
  background-color: #fc4343;
  font-size: 17px;
  justify-content: space-between;
  .backBtn {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    @media only screen and (max-width: 550px) {
      font-size: 15px;
    }
  }
  #logo {
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
  @media only screen and (max-width: 550px) {
    &::before {
      top: 17px;
    }
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
const WelcomeP = styled.p`
  color: white;
  text-transform: capitalize;
  border-top: 1px solid white;

  button {
    background-color: transparent;
    color: white;
    border: none;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    font-size: 17px;
    margin-left: 3px;
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: 12px;
    button {
      font-size: 12px;
      border-right: 1px solid white;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 800px) {
    font-size: 14px;
    button {
      font-size: 14px;
    }
  }
`;

const NavigationBar = () => {
  const {
    onChangeInputValue,
    FetchMovie,
    setOpenModal,
    loggedUser,
    setLoggedUser
  } = useContext(Context);

  return (
    <NavigationMain>
      <Link id='logo' to='/'>
        MovieMe
      </Link>

      {window.location.href.includes('details') ? (
        <Link className='backBtn' to='/'>
          Back
        </Link>
      ) : (
        <Search
          id='form'
          onFocus={() => document.getElementById('form').classList.add('top')}
          onBlur={() => {
            document.getElementById('form').classList.remove('top');
            document.getElementById('searchInput').value = '';
          }}
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
      )}

      {loggedUser.Username !== undefined ? (
        <WelcomeP>
          {loggedUser.Username}
          <button onClick={() => setLoggedUser({})}>Logout</button>
        </WelcomeP>
      ) : (
        <LogInButton onClick={() => setOpenModal(true)}>Log In</LogInButton>
      )}
    </NavigationMain>
  );
};

export default NavigationBar;
