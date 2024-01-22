import React from "react"
import ButtonComponent from '../home/buttonComponent';
import { Link } from "react-router-dom";
import './ResendEmail.css';
import { FaLongArrowAltLeft } from "react-icons/fa";

const ResendEmail = (props) => {
  return (
    <div className="resendEmail_container">
        <div className="resendEmail">
            <h2>Check Email</h2>
            <p>We have sent the email to youremailaccount@gmail.com</p>
            <ButtonComponent active={true} linkTo={"#"}>Resend Email</ButtonComponent>
            <div>
                <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
            </div>
        </div>
    </div>
  )
};

export default ResendEmail;
