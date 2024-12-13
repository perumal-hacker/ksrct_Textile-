import React from 'react';
import './card.css'; // Ensure the path to your CSS file is correct

const ProfileCard = ({ photo, name, title, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-photo">
        <img src={photo} alt={`${name}'s profile`} />
      </div>
      <div className="profile-card-details">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
