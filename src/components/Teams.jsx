import React from 'react'
import "./Teams.css"
import { useNavigate } from 'react-router-dom';

const Teams = () => {
    const navigate = useNavigate()
    return (
      <div className="detail">
        <h1>Invite your team</h1>
        <div className="div1">Start collaborating with your team.</div>
        
        
  
        <div className="form">
          
            <label>
              <h4>Email address* </h4>
            </label>

            <div className="div2">
            <input type="text" placeholder="Enter an email address" />
            <br/>
            </div>
            <div className="div2">
            <input type="text" placeholder="Enter an email address" />
            <br/>
            </div>
            <div className="div2">
            <input type="text" placeholder="Enter an email address" />
            </div>
            
        
        </div>

        + Add more

        
          <div className="button">
        <button className="btn2"
        onClick={() => navigate('/socials')}>
          Continue
  
      
  
         
        </button>
        </div>
      </div>
    );
  
}

export default Teams
