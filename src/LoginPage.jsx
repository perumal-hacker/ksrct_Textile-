import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router
import './page.css';
import textile from './img2.jpg';
import ksr_logo from './ksrct_logo.png';
import OnlineRegistration from './OnlineRegistration'; // Import OnlineRegistration Component

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [inputType, setInputType] = useState('email');

  const handleInputChange = (e) => {
    if (isLogin) {
      if (e.target.id === 'input1') {
        setEmail(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    } else {
      if (e.target.id === 'input1') {
        setEmail(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    }
  };

  const handleReportClick = () => {
    setIsLogin(false);
    setInputType('number');
    document.getElementById('input1').placeholder = 'ID';
    document.getElementById('input2').placeholder = 'Code';
    document.querySelector('.button-group button:nth-child(1)').textContent = 'Submit';
    document.querySelector('.button-group button:nth-child(2)').textContent = 'Back';
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    setInputType('email');
    document.getElementById('input1').placeholder = 'Email';
    document.getElementById('input2').placeholder = 'Password';
    document.querySelector('.button-group button:nth-child(1)').textContent = 'Report';
    document.querySelector('.button-group button:nth-child(2)').textContent = 'Login';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted');
    } else {
      console.log('Report submitted');
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="image-container">
                <img src={textile} alt="Textile Factory" className="background-image" />
              </div>
              <div className="card">
                <img src={textile} alt="Textile Factory" className="background-image" />
                <h2>KSR Textile Testing Online Service</h2>
                <img src={ksr_logo} alt="KSR Logo" />
                <h2 className="welcome">Welcome</h2>
                <div className="form-container">
                  <form onSubmit={handleSubmit}>
                    <input
                      type={isLogin ? 'email' : 'number'}
                      id="input1"
                      placeholder={isLogin ? 'Email' : 'ID'}
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type={isLogin ? 'password' : 'number'}
                      id="input2"
                      placeholder={isLogin ? 'Password' : 'Code'}
                      value={password}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="button-group">
                      <button type="button" onClick={handleReportClick}>
                        {isLogin ? 'Report' : 'Submit'}
                      </button>
                      <button type={isLogin ? 'submit' : 'button'} onClick={handleLoginClick}>
                        {isLogin ? 'Login' : 'Back'}
                      </button>
                    </div>
                  </form>
                </div>
                <p className="forget-password">Forget Password?</p>
                {/* Link to Online Registration Page */}
                <Link className="need-registration" to="/online-registration">
                  New registration?
                </Link>
              </div>
            </div>
          }
        />
        {/* Route for Online Registration Page */}
        <Route path="/online-registration" element={<OnlineRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
