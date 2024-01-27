import React from "react"
import ButtonComponent from '../home/buttonComponent';
import { Link } from "react-router-dom";
import './ResendEmail.css';
import { FaLongArrowAltLeft } from "react-icons/fa";

const ResendEmail = ({userEmail , callResendMailTriggerer}) => {

  function resetEmailSentHandler(){
    console.log('function called to set the email sent status to false')
    callResendMailTriggerer();
  }

  return (
    <div className="resendEmail_container">
        <div className="resendEmail">
            <h2>Check Email</h2>
            <p>We have sent the email to {userEmail}</p>
            <div onClick={resetEmailSentHandler}>
              <ButtonComponent active={true}>Resend Email</ButtonComponent>
            </div>
            <div>
                <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
            </div>
        </div>
    </div>
  )
};

export default ResendEmail;
