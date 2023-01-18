import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalCont = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem;
  display: inline-block;
`;
const Login = () => {
  const { openModal, setOpenModal, setLoggedUser, loggedUser } =
    useContext(Context);
  const [loginOrRegister, setLoginOrRegister] = useState('register');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    openModal
      ? (document.querySelector('body').style.overflow = 'hidden')
      : (document.querySelector('body').style.overflow = 'unset');
  }, [openModal]);
  const UserRegister = (user, pass) => {
    let newUser = {
      Username: user,
      Password: pass
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = users.find(
      (el) =>
        el.Username === newUser.Username && el.Password === newUser.Password
    );
    if (existingUser) {
      console.log('user already exists');
    } else {
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
    document.getElementById('userName').value = '';
    document.getElementById('passWord').value = '';
  };
  const UserLogin = (user, pass) => {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    let pendingUser = { Username: user, Password: pass };
    console.log(pendingUser);
    let newUser = users.find(
      (el) =>
        el.Username === pendingUser.Username &&
        el.Password === pendingUser.Password
    );
    console.log(newUser);
    newUser ? setLoggedUser(newUser) : console.log('user not found');
    console.log(loggedUser);
    document.getElementById('userName').value = '';
    document.getElementById('passWord').value = '';
  };

  return (
    <>
      {openModal && (
        <Main>
          <Overlay onClick={() => setOpenModal(false)} />
          <ModalCont>
            <button onClick={() => setOpenModal(false)}>Close</button>
            <button onClick={() => setLoginOrRegister('login')}>Login</button>
            <button onClick={() => setLoginOrRegister('register')}>
              register
            </button>
            <form>
              <label>username</label>
              <input
                type='text'
                id='userName'
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>password</label>
              <input
                type='password'
                id='passWord'
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginOrRegister === 'register' ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    UserRegister(username, password);
                    setLoginOrRegister('login');
                  }}
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    UserLogin(username, password);
                    setOpenModal(false);
                  }}
                >
                  Login
                </button>
              )}
            </form>
          </ModalCont>
        </Main>
      )}
    </>
  );
};

export default Login;
