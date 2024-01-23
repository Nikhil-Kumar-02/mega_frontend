import React from "react"
import { FaLongArrowAltLeft } from "react-icons/fa";
import './ChooseNewPassword.css'
import ButtonComponent from "../home/buttonComponent";
import { Link } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";

const ChooseNewPassword = (props) => {
  return (
    <div className="chooseNewPassword_wrapper">
      <div className="ChooseNewPassword">
        <h2>Choose New Password</h2>
        <p>
            Almost done. Enter your new password and you are all set.
        </p>
        <label for="newPassword">New Password<CgAsterisk></CgAsterisk></label>
        <input id="newPassword" type="email" placeholder="Enter New Password"></input>
        <label for="confirmPassword">Confirm New Password<CgAsterisk></CgAsterisk></label>
        <input id="confirmPassword" type="email" placeholder="Confirm Above Password"></input>

        <div className="password_validator">
            <div>
                <div><FaCheckCircle />one lowercase character</div>
                <div><FaCheckCircle />one uppercase character</div>
                <div><FaCheckCircle />one number</div>
            </div>
            <div>
                <div><FaCheckCircle />one special character</div>
                <div><FaCheckCircle />8 character minimum</div>
            </div>
        </div>

        <ButtonComponent active={true} linkTo={"#"}>Reset Password</ButtonComponent>

        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
        </div>

      </div>
    </div>
  )
};

export default ChooseNewPassword;
