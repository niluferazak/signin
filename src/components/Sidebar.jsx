import React from 'react'
import "./Sidebar.css"
import listicon from "../components/assets/check-circle.png"
import { Link } from 'react-router-dom'
import icon from "./assets/Icon.png"
import circle from "./assets/Icon.png"


const Sidebar = () => {



 
  
  
  return (
    
        <div className="sidebar">
          <div className="sidebarWrapper">
          <img className='dot1' src={circle} alt='sidebar'/>
          <img  className='dot2'src={circle} alt='sidebar'/>
          <img className='dot3'  src={circle} alt='sidebar'/>

            <div className="sidebarMenu">
             

              <h2 className='title'> 
                <img src={icon} alt='sidebar'/>     Untitled UI
                
                </h2>

              <ul className="sidebarList">
               
                  <Link to="/details" className="link">
                    <li className="sidebarListitem">

                       
                    <img  src={listicon} alt="details" />
                    
                   
                        <div className="listContainer">
                      
                      <h4 className='details'>Your Details</h4>
                    Please provide your name and e-mail
                    </div>
                    </li>
                  </Link>
                
                  <Link to="/password" className="link">
                    <li className="sidebarListitem">
                      <img src={listicon} alt="password" />
                      <div className="listContainer">
                      
                    <h4> Choose a Password</h4>
                    Must be atlest 8 characters
                    </div>
                    </li>
                  </Link>
                  
                  

                  <Link to="/teams" className="link">
                    <li className="sidebarListitem">
                      <img src={listicon} alt="teams" />
                      <div className="listContainer">
                      <h4>Invite your team</h4>
                  
                    Start collaborating with your team
                    </div>
                    </li>
                  </Link>

                  <Link to="/socials" className="link">
                    <li className="sidebarListitem">

                      <img src={listicon} alt="social" />
                      <div className="listContainer">
                      <h4>Add you Socials</h4>
                  
                    Share posts to your social acccounts
                    </div>
                    </li>
                  </Link>
    
                 
               
              </ul>

              <footer>
               
              </footer>
              </div>
              </div>
              </div>
  )
}

export default Sidebar
