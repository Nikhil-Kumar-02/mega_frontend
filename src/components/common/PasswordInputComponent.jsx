import React, { useState } from "react"
import './PasswordInputComponent.css'
import { CgAsterisk } from "react-icons/cg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const PasswordInputComponent = ({title , placeholder}) => {

  const [passwordVisiblity , setPasswordVisiblity] = useState(false);

  function passwordVisiblityToggler(){
    setPasswordVisiblity(prev => !prev);
  }

  return (
    <div className="password_container">
        <label for="Password">{title}<CgAsterisk></CgAsterisk></label>
        <div>
          <input id="Password" type={passwordVisiblity ? "text" : "password"} placeholder={placeholder}></input>
          <div onClick={passwordVisiblityToggler}>
            {
              passwordVisiblity ? <IoIosEye></IoIosEye> : <IoIosEyeOff></IoIosEyeOff> 
            }
          </div>
        </div>
    </div>
  )
};

export default PasswordInputComponent;
