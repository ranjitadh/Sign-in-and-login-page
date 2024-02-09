import React, { useState } from "react";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import "./Login.css";

// import {BsEyeSlash,BsEye} from 'react-icons/bs';
export default function login() {




  const [action, setAction] = useState("");
  const [password, setPasswordValue] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");
  const onPasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };



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
              <input
               type={password}
               onChange={onPasswordChange}
               value={passwordInput}
               placeholder="Enter password"
               name="password"
               className="form-control" />
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
            <button className="toogle" onClick={toggle}>
          {password === "password" ? (
            <svg
              width="20"
              height="17"
              fill="currentColor"
              className="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          ) : (
            <svg
              width="20"
              height="17"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          )}
        </button>
             
            </span>
          </div>}
           
        </div>
      </div>
    </div>
  );
}