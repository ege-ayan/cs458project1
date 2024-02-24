import React from 'react';
import './LoginPage.css';
import { GoogleLogin } from '@react-oauth/google';

const responseMessage = (response) => {
    console.log(response);
    alert("Successfully logged in using Google Auth")
};

const errorMessage = (error) => {
    console.log(error);
};

const performLoginLogic = (e)  => {
  e.preventDefault(); 
  alert("Clicked on Login Button ")
}

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="login-button-container">
            <button className="login-button" onClick={performLoginLogic}>Login</button>
          </div>
        </form>
        <div className="google-login-button">
          <GoogleLogin 
            onSuccess={responseMessage} 
            onError={errorMessage} 
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
