import React from 'react';
import './UserDashboard.css';
import bg from '../../assets/bg-dashboard.jpg';
import { useNavigate } from 'react-router-dom';



export default function UserDashboard() {

    const navigate = useNavigate();
    const handleClick = () => {
    navigate("/Questions");
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${bg})` }}>
        
            <div className="welcome-text">Welcome CHAITANYA!</div> 
            <div className="view_profile"> View Profile</div>



                {/* Stats Section */}
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
