import React from "react"
import { FaLongArrowAltLeft } from "react-icons/fa";
import './ChooseNewPassword.css'
import ButtonComponent from "../home/buttonComponent";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import PasswordInputComponent from '../../common/PasswordInputComponent'

const ChooseNewPassword = (props) => {

  return (
    <div className="chooseNewPassword_wrapper">
      <div className="ChooseNewPassword">
        <h2>Choose New Password</h2>
        <p>
            Almost done. Enter your new password and you are all set.
        </p>

        <PasswordInputComponent title={"New Password"} placeholder={"Enter New Password"}>
        </PasswordInputComponent>

        <PasswordInputComponent title={"Confirm New Password"} placeholder={"Confirm Above Password"}></PasswordInputComponent>

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
