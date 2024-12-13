import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './OnlineRegistration.css';
import TextileImage from './img1.jpg';

const OnlineRegistration = () => {
  const [registrationType, setRegistrationType] = useState('');

  const handleRegistrationTypeChange = (e) => {
    setRegistrationType(e.target.value);
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="registration-image">
          <img src={TextileImage} alt="Fabric Rolls" className="background-image" />
        </div>
        <div className="registration-form">
          <h2>KSRCT Textile Online Registration</h2>
          <form>
            {/* Registration form fields */}
            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>Registration Type
                </label>
                <select
                  value={registrationType}
                  onChange={handleRegistrationTypeChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="mill">Mill</option>
                  <option value="organization">Organization</option>
                  <option value="individual">Individual</option>
                  <option value="institution">Institution</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>Mill / Organization Name
                </label>
                <input type="text" placeholder="Mill/Organization Name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>Contact Person ID
                </label>
                <input type="text" placeholder="Contact Person ID" required />
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>Contact Person Name
                </label>
                <input type="text" placeholder="Contact Person Name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>Mobile Number
                </label>
                <input type="text" placeholder="Mobile Number" required />
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>Email
                </label>
                <input type="email" placeholder="Email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>Address Line 1
                </label>
                <input type="text" placeholder="Address Line 1" required />
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>Address Line 2
                </label>
                <input type="text" placeholder="Address Line 2" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>City
                </label>
                <input type="text" placeholder="City" required />
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>State
                </label>
                <input type="text" placeholder="State" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-box">
                <label>
                  <span>*</span>Pincode
                </label>
                <input type="text" placeholder="Pincode" required />
              </div>
              <div className="input-box">
                <label>
                  <span>*</span>GST Registration Type
                </label>
                <input type="text" placeholder="Un-Registered" />
              </div>
            </div>

            <div className="form-buttons">
              {/* Link to go back to Login Page */}
              <Link to="/" className="back-button">
                Back to Login
              </Link>
              <button type="submit" className="create-button">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineRegistration;
