import React from 'react'
import "./Social.css"
// import { useNavigate } from 'react-router-dom'


const Social = () => {



    // const navigate = useNavigate()
  return (
    <div className="detail">
      <h1>Add your socials</h1>
      <div className="div1">Share posts to your social accounts.</div>
      

      <div className="form">
        <form action="submit">
          <label>
            <h4>Twitter </h4>
          </label>
          <input type="text" placeholder="twitter.com/@example" />

          <label>
            <h4>AngelList</h4>
          </label>
          <input type="text"
           placeholder="angel.co/company/example" />

          <label>
            <h4>LinkedIn </h4>
          </label>
          <input type="text" placeholder=" linkedin.com/company/example" />
        </form>
      </div>
        <div className="button">
      <button className="btn2"
      >
     
        Complete sign up
        
 
      </button>
      </div>
    </div>
  );
}

export default Social
