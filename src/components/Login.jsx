import React, { useState } from "react";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import "./Login.css";
// import {BsEyeSlash,BsEye} from 'react-icons/bs';
export default function login() {
  const [action, setAction] = useState("");
  const [password, setPassword] = useState("");
const[visible,setVisible]=useState(false)
const handleInput=(e)=>
{
  setPassword(e.target.value)
};
const handlevisible=()=>
{
  setVisible(!visible);
}



  return (
    <div className="container">
      <div className="header">
        <div className="text">
          <div className="underline">{action}</div>
          <div className="inputs">
            {action=== "Login" ? <div></div>:
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>}
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
              <div className="icon">
                {/* {visible?(
                <BsEyeSlash onClick={handlevisible}/>):(
                <BsEye onClick={handlevisible}/>
                )
                } */}
              </div>
            </div>
          </div>
       
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
            <button>Sign Up</button>
          </div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
            <button>Login</button>
          </div>
          {action==="Sign Up" ? <div/>:
          <div className="forget_pass">
            Forgot Password?{" "}
            <span>
              <button>Click Here</button>
            </span>
          </div>}
        </div>
      </div>
    </div>
  );
}
