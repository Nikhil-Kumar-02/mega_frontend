import React from "react"
import { Link } from "react-router-dom";
import './signUpLogIn.css'

const SignUpLogIn = (props) => {
  return (
    <div className="signUpLogIn_wrapper">
        <div>
            <Link to={"/signUp"}>Sign Up</Link>
        </div>
        <div>
            <Link to={"/logIn"}>Log In</Link>
        </div>
    </div>
  )
};

export default SignUpLogIn;
