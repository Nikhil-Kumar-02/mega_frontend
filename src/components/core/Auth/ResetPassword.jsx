import React from "react"
import './ResetPassword.css'
import ButtonComponent from '../home/buttonComponent';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CgAsterisk } from "react-icons/cg";
import { Link } from "react-router-dom";

const ResetPassword = (props) => {
  return (
    <div className="reset_password_container">
      <div className="reset_password">
        <h2>Reset Your Password</h2>
        <p>Have no fear. We'll email you instructions to reset 
                your password. If you don't have access to your email we can try account recovery
        </p>
        <label for="emailAddress">Email Address <CgAsterisk/></label>
        <input type="email" id="emailAddress" placeholder="Enter Your Email Address"></input>
        <div>
            <ButtonComponent active={true} linkTo={"#"}>Reset Password</ButtonComponent>
        </div>
        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
        </div>
      </div>
    </div>
  )
};
export default ResetPassword;
