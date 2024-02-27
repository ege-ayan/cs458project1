import React, { useState } from 'react';
import './LoginPage.css';
import { GoogleLogin } from '@react-oauth/google';
import { getUserByEmailAndPassword } from './userData';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const performLoginLogic = (e) => {
    e.preventDefault();
  
    // Check Internet Connection (CASE 1)
    if (!navigator.onLine) {
      setModalMessage("No internet connection available.");
      setShowModal(true);
      return;
    }
  
    // Check if email or password is empty (CASE 2.1)
    if (!email.trim() || !password.trim()) {
      setModalMessage("Email and password are required.");
      setShowModal(true);
      return;
    }
  
    // Check if user is valid or not
    const user = getUserByEmailAndPassword(email, password);
    if (user) {
      // successful login (CASE 3)
      setModalMessage("Successfully logged in");
      setShowModal(true);
    } else { // CASE (2.2)
      setModalMessage("Invalid email or password");
      setShowModal(true);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const responseMessage = (response) => { // CASE 4
    setModalMessage("Successfully logged in using Google Auth");
    setShowModal(true);
  };

  const errorMessage = (error) => { // CASE 5
    setModalMessage("Error logging in with Google Auth");
    setShowModal(true);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;