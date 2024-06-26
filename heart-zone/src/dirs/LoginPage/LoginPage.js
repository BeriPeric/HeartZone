import './LoginPage.css';
import React from "react";
import MainMatching from '../MainMatching/MainMatching';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Button = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    if (username && password) {
      // Perform login action
      window.location.href = '/MainMatching';
      console.log('Logging in...');
    } 
    else {
      alert('Please enter valid username and password.');
    }
  };

  return (
    <>
      <section className="login-container">
        <header className="images-header">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="icon" onClick={handleBack}/>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="logo" />
      </header>
        <section className="form-section-login">
          <div className="content-container-login">
            <h1 className="title-login">Login</h1>
            <p className="subtitle-login">Sign in to continue</p>
            <label htmlFor="username" className="input-label visually-hidden">USERNAME</label>
            <input id="username" value={username} className="input-field-login" type="text" aria-label="Enter your username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="passwordInput" className="input-label visually-hidden">PASSWORD</label>
            <input id="passwordInput" value={password} className="input-field-login" type="password" aria-label="Enter your password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button text="Login" className="signup-button-login" onClick={handleLoginClick}>Login</button>
            <Button text="Forgot password? click here" className="forgot-password" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ce8744aa54d8eb63f151402128b4a98faf98991df1f24b64ab22fde0dbfd1b?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="Footer Decorative" className="footer-image" />
        </section>
      </section>
    </>
  );
}

export default LoginPage;