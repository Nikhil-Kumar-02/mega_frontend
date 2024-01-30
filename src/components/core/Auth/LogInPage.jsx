import React, { useState } from "react"
import loginImage from '../../../assets/loginImage.jpg'
import { FcGoogle } from 'react-icons/fc';
import './LogInAndSignUp.css'
import { CgAsterisk } from "react-icons/cg";
import PasswordInputComponent from '../../common/PasswordInputComponent'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {backendLogInRequest} from '../../../services/operations/auth'

const LogInPage = (props) => {

const [email , setEmail] =  useState("");
const [password , setPassword] =  useState("");

const dispatch = useDispatch();

function submitHandler(e){
  e.preventDefault();
  console.log(email , password);
  dispatch(backendLogInRequest(email , password));
}
 
  return (
    <div className="LogInPage">
      <div>
        <form className="signInform" onSubmit={submitHandler}>
            <h1>Welcome Back</h1>
            <div>Build skills for today / tomorrow and beyond </div>
            <div className="signBluetxt">Education to future proof your career</div>

            <div className="login_email">
                <label htmlFor="email">Email Address <div><CgAsterisk/></div></label>
                <input required type="email" id="email" placeholder="Enter email address" name="Email" onChange={(e) => {
                  setEmail(e.target.value)
                }}></input>
            </div>

            <div className="login_password">
                <PasswordInputComponent title={"Password"} placeholder={"Enter your Password"}
                fetchPassword={setPassword}></PasswordInputComponent>
                <div className="forgotPassword">
                  <Link to={"/forgotPassword"}>Forgot Password ?</Link>
                </div>
            </div>
            <div>
                <button type="submit" className="signInButton">Log In</button>
            </div>
            <div>
                <button type="submit" ><FcGoogle className="googleLogo"></FcGoogle>Sign In With Google</button>
            </div>
        </form>
        <img src={loginImage} alt="the teacher is teaching" width={400} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default LogInPage;
