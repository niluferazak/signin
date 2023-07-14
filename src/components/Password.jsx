import React , {useState} from 'react'
import "./Password.css"
import { useNavigate } from 'react-router-dom'
import pswrd from "./assets/lock.svg"

const Password = () => {

  const [enteredPassword, setEnteredPassword]= useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword]= useState('');

  const passwordChangeHandler=(event)=>{

    setEnteredPassword( event.target.value );
    
    

};

const confirmPasswordChangeHandler=(event)=>{

  setEnteredConfirmPassword( event.target.value );
  
  

};

const navigate = useNavigate()








   
    return (
      <div className="password">
        <img src={pswrd} alt="password" />
        <h1>Choose a password</h1>
        <div className="div1">Must be atleast 8 characters.</div>
        
        
  
        <div className="form">
          <form action="submit">
            <label>
              <h4>Password* </h4>
            </label>
            <input type="password" 
            placeholder="Choose a password" 
            value={enteredPassword}
             onChange={passwordChangeHandler}/>
  
            <label>
              <h4>Confirm password* </h4>
            </label>
            <input type="password"
             placeholder="Confirm password"
              value={enteredConfirmPassword}
              onChange={confirmPasswordChangeHandler}/>
  
            
          </form>
        </div>
          <div className="button">
        <button className="btn2"
        onClick={() => navigate('/teams')}>
          Continue
  
      
  
         
        </button>
        </div>
      </div>
    );
}

export default Password
