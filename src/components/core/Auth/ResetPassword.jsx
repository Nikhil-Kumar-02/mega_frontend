import React from "react"
import './ResetPassword.css'
import ButtonComponent from '../home/buttonComponent';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CgAsterisk } from "react-icons/cg";
import { Link } from "react-router-dom";

const ResetPassword = ({setTheEmail , resetPasswordClicked}) => {

  function submitHandler(){
    console.log('clicked on the button')
    resetPasswordClicked();
  }

  return (
    <div className="reset_password_container">
      <div className="reset_password">
        <h2>Reset Your Password</h2>
        <p>Have no fear. We'll email you instructions to reset 
          your password. If you don't have access to your email we can try account recovery
        </p>
        <label for="emailAddress">Email Address <CgAsterisk/></label>
        <input reauired type="email" id="emailAddress" placeholder="Enter Your Email Address"
        onChange={(e) => {
          setTheEmail(e.target.value);
        }}></input>
        <div onClick={submitHandler}>
          <ButtonComponent active={true}>Reset Password</ButtonComponent>
        </div>
        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
        </div>
      </div>
    </div>
  )
};
export default ResetPassword;
