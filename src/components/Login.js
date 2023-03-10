import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import closeImg from '../Images/close.png';
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
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 70%);
  height: calc(100vh - 30%);
  align-items: center;
  overflow: hidden;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(252, 67, 67, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(252, 67, 67, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(252, 67, 67, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#fc4343",GradientType=1);
  color: white;
  h1 {
    text-align: center;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: calc(100vw - 5%);
  }
  @media screen and (min-width: 425px) and (max-width: 550px) {
    width: calc(100vw - 25%);
  }
  @media screen and (min-width: 550px) and (max-width: 768px) {
    width: calc(100vw - 40%);
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: calc(100vw - 50%);
  }
`;
const CloseBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      img {
        transform: rotate(45deg);
        transition: 0.6s;
      }
    }
    img {
      background-color: white;
      border-radius: 50%;
      transition: 0.6s;
    }
  }
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .userNameLabel {
    margin-top: -20px;
    transition: 0.6s;
  }
  input {
    width: 80%;
    padding: 3px 10px;
    margin-bottom: 10px;
    border: none !important;
    border-bottom: 1px solid white !important;
    background-color: transparent;
    color: white;
    transition: 0.6s;

    &:focus-visible {
      outline: none;
    }
    &:hover {
      transform: scale(1.05);
      transition: 0.6s;
    }
  }
  button {
    padding: 3px 10px;
    border: none;
    width: 80%;
    background-color: transparent;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #fc4343;
    transition: 0.6s;
    &:hover {
      letter-spacing: 1.3px;
      transition: 0.6s;
    }
  }
`;
const LastBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  width: 40%;
  font-size: 16px;
  cursor: pointer;
`;
const ForgotPassDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const WrongMailP = styled.p`
  margin: 3px 0px;
  transform: translate(-1000px, 0px);
  transition: 0.6s;
  min-height: 19px;
`;
const Login = () => {
  const { openModal, setOpenModal, setLoggedUser, loggedUser } =
    useContext(Context);
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    openModal
      ? (document.querySelector('body').style.overflow = 'hidden')
      : (document.querySelector('body').style.overflow = 'unset');
  }, [openModal]);
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const UserRegister = (user, pass, email) => {
    if (user !== '' && pass !== '' && email !== '') {
      if (validateEmail(email)) {
        let newUser = {
          Username: user,
          Password: pass,
          Email: email.toLowerCase()
        };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let existingUser = users.find((el) => el.Email === newUser.Email);
        if (existingUser) {
          document.querySelector('.userNameLabel').style.marginTop = '20px';
          document.querySelector('.wrongMail').style.transform =
            'translate(0px, 0px)';
          setTimeout(() => {
            document.querySelector('.wrongMail').style.transform =
              'translate(-1000px, 0px)';
            document.querySelector('.userNameLabel').style.marginTop = '-20px';
          }, 2000);
        } else {
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          document.getElementById('userName').value = '';
          document.getElementById('passWord').value = '';
          setLoginOrRegister('login');
          document.querySelector('.wrongMail').innerHTML =
            'Registration successful!';
          document.querySelector('.userNameLabel').style.marginTop = '20px';
          document.querySelector('.wrongMail').style.transform =
            'translate(0px, 0px)';
          setTimeout(() => {
            document.querySelector('.wrongMail').style.transform =
              'translate(-1000px, 0px)';
            document.querySelector('.userNameLabel').style.marginTop = '-20px';
          }, 2000);
          setEmail('');
          setPassword('');
          setUsername('');
          document.getElementById('userName').value = '';
          document.getElementById('passWord').value = '';
          document.getElementById('eMail').value = '';
        }
      } else {
        document.querySelector('.wrongMail').innerHTML =
          'Invalid email address!';
        document.querySelector('.userNameLabel').style.marginTop = '20px';
        document.querySelector('.wrongMail').style.transform =
          'translate(0px, 0px)';
        setTimeout(() => {
          document.querySelector('.wrongMail').style.transform =
            'translate(-1000px, 0px)';
          document.querySelector('.userNameLabel').style.marginTop = '-20px';
        }, 2000);
      }
    } else {
      document.querySelector('.wrongMail').innerHTML =
        'Please fill all the fields!';
      document.querySelector('.userNameLabel').style.marginTop = '20px';
      document.querySelector('.wrongMail').style.transform =
        'translate(0px, 0px)';
      setTimeout(() => {
        document.querySelector('.wrongMail').style.transform =
          'translate(-1000px, 0px)';
        document.querySelector('.userNameLabel').style.marginTop = '-20px';
      }, 2000);
    }
  };
  const UserLogin = (email, pass) => {
    let users = JSON.parse(localStorage.getItem('users'));
    let pendingUser = { Email: email, Password: pass };
    let newUser = users.find(
      (el) =>
        el.Email === pendingUser.Email.toLowerCase() &&
        el.Password === pendingUser.Password
    );

    if (newUser) {
      setLoggedUser(newUser);
      setOpenModal(false);
      setEmail('');
      setPassword('');
      setUsername('');
    } else {
      document.querySelector('.wrongMail').innerHTML = 'User not found!';
      document.querySelector('.userNameLabel').style.marginTop = '20px';
      document.querySelector('.wrongMail').style.transform =
        'translate(0px, 0px)';
      setTimeout(() => {
        document.querySelector('.wrongMail').style.transform =
          'translate(-1000px, 0px)';
        document.querySelector('.userNameLabel').style.marginTop = '-20px';
      }, 2000);
      setEmail('');
      setPassword('');
      setUsername('');
    }
    document.getElementById('userName').value = '';
    document.getElementById('passWord').value = '';
  };
  const ForgotPassword = (email) => {
    let users = JSON.parse(localStorage.getItem('users'));
    let pendingUser = { Email: email };
    if (validateEmail(email)) {
      let noPassUser = users.find((el) => el.Email === pendingUser.Email);
      if (noPassUser) {
        document.querySelector('.wrongMail').innerHTML =
          'Your password is ' + noPassUser.Password;
        document.querySelector('.wrongMail').style.transform =
          'translate(0px, 0px)';
        setTimeout(() => {
          document.querySelector('.wrongMail').style.transform =
            'translate(-1000px, 0px)';
        }, 5000);
        setEmail('');
        setPassword('');
        setUsername('');
        // alert(`Your password is ${noPassUser.Password}`);
        document.getElementById('userName').value = '';
        document.getElementById('passWord').value = '';
        document.getElementById('eMail').value = '';
      } else {
        document.querySelector('.wrongMail').style.transform =
          'translate(0px, 0px)';
        setTimeout(() => {
          document.querySelector('.wrongMail').style.transform =
            'translate(-1000px, 0px)';
        }, 2000);
        setEmail('');
        setPassword('');
        setUsername('');
      }
    } else {
      document.querySelector('.wrongMail').innerHTML =
        'Please enter a valid email address!';
      document.querySelector('.wrongMail').style.transform =
        'translate(0px, 0px)';
      setTimeout(() => {
        document.querySelector('.wrongMail').style.transform =
          'translate(-1000px, 0px)';
      }, 2000);
      setEmail('');
      setPassword('');
      setUsername('');
    }
  };
  return (
    <>
      {openModal && (
        <Main>
          <Overlay onClick={() => setOpenModal(false)} />
          <ModalCont>
            <CloseBtnDiv>
              <button onClick={() => setOpenModal(false)}>
                <img src={closeImg} />
              </button>
            </CloseBtnDiv>
            {loginOrRegister == 'login' ? (
              <h1>Login</h1>
            ) : loginOrRegister == 'register' ? (
              <h1>Register</h1>
            ) : (
              <h1>Password Recovery</h1>
            )}
            {loginOrRegister === 'login' ? (
              <>
                <InputForm>
                  <label>Email</label>
                  <input
                    type='email'
                    id='userName'
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <WrongMailP className='wrongMail'>
                    Successfull registration!
                  </WrongMailP>
                  <label className='userNameLabel'>Password</label>
                  <input
                    type='password'
                    id='passWord'
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      UserLogin(email, password);
                    }}
                  >
                    Login
                  </button>
                </InputForm>
                <ForgotPassDiv>
                  <LastBtn onClick={() => setLoginOrRegister('register')}>
                    Not a member?
                  </LastBtn>
                  <LastBtn onClick={() => setLoginOrRegister('forgotPass')}>
                    Forgot Password?
                  </LastBtn>
                </ForgotPassDiv>
              </>
            ) : loginOrRegister === 'register' ? (
              <>
                <InputForm>
                  <label>Email</label>
                  <input
                    type='email'
                    id='eMail'
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <WrongMailP className='wrongMail'>
                    Email already in use!
                  </WrongMailP>
                  <label className='userNameLabel'>Username</label>
                  <input
                    type='text'
                    id='userName'
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>Password</label>
                  <input
                    type='password'
                    id='passWord'
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      UserRegister(username, password, email);
                    }}
                  >
                    Register
                  </button>
                </InputForm>
                <LastBtn onClick={() => setLoginOrRegister('login')}>
                  Already a member?
                </LastBtn>
              </>
            ) : (
              <>
                <InputForm>
                  <label>Email</label>
                  <input
                    type='email'
                    id='eMail'
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <WrongMailP className='wrongMail'>
                    Unknown email address!
                  </WrongMailP>
                </InputForm>
                <ForgotPassDiv>
                  <LastBtn onClick={() => setLoginOrRegister('login')}>
                    Already a member?
                  </LastBtn>
                  <LastBtn onClick={() => ForgotPassword(email)}>
                    Password Reset
                  </LastBtn>
                </ForgotPassDiv>
              </>
            )}
          </ModalCont>
        </Main>
      )}
    </>
  );
};

export default Login;
