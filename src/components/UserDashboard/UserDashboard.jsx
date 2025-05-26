import React, { useState, useRef, useEffect } from 'react';
import './UserDashboard.css';
import bg from '../../assets/bg-dashboard.jpg';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  const handleClick = () => {
    navigate("/Questions");
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  // Dismiss profile on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="welcome-text">Welcome CHAITANYA!</div> 
      <div className="view_profile" onClick={toggleProfile}> View Profile</div>

      {showProfile && (
        <div className="profile-box" ref={profileRef}>
          <div ><strong >Name:</strong> Chaitanya Kumar</div>
          <div ><strong >Email:</strong> Ck758779@gmail.com</div>
          <div ><strong >Institute:</strong> IIT GUWAHATI</div>
          <div ><strong >Date Joined:</strong> May, 2024</div>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      )}

      <div className="card stats-card">
        <div className="stat-box">
          <div className="stat-value"><span className="valueColorchange">120 </span><span> Questions Solved</span><span className="dot">.</span></div>
        </div>
        <div className="stat-box">
          <div className="stat-value"><span className="valueColorchange">12 </span><span> Bookmarked</span><span className="dot">.</span></div>
        </div>
        <div className="stat-box">
          <div className="stat-value"><span className="valueColorchange">365 </span> days<span> Streak</span><span className="dot">.</span></div>
        </div>
      </div>

      <div className="intro">
        <div className="z_coder">Z<span className="hyphen">_</span>CODER</div>
        <div className="description">Online Learning Platform <span className="dot">.</span></div>
      </div>

      <div className="start_learning">
        <button className="my-button" onClick={handleClick}>start coding</button>
      </div>
    </div>
  );
}
