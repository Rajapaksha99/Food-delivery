import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Sign up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-pop-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create New Account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
      }
        
        <p>Already have an account?<span>Login here</span></p>
      </form>
    </div>
  )
}

export default LoginPopup