import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResendEmail from '../components/core/Auth/ResendEmail'
import ResetPassword from '../components/core/Auth/ResetPassword'
import { getPasswordResetToken } from "../services/operations/auth";

const ForgotPassword = (props) => {

    const [email , setEmail] = useState("");
    const [emailSent , setEmailSent] = useState(false);
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();

    console.log('the email is : ' , email)
    
    function resetPassword(){
        console.log('button clicked for email : ' , email);
        dispatch(getPasswordResetToken(email , setEmailSent));
    }

    function sendEmailTriggered(){
      setEmailSent(false);
      setEmail("");
    }
    console.log('page refreshed : ');
    console.log('email status : ' , email);
    console.log('email sent status : ' , emailSent);
    console.log('loading status : ' , loading);

  return (
    <div>
      {
        loading ? (
            <div>loader ... </div>
        ) : (
            !emailSent ? (
                <ResetPassword setTheEmail={setEmail} resetPasswordClicked={resetPassword}></ResetPassword>
            ) : (
                <ResendEmail callResendMailTriggerer={sendEmailTriggered} userEmail={email}></ResendEmail>
            )
        )
      }
    </div>
  )
};

export default ForgotPassword;
