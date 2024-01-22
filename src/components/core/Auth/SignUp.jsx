import React, { useState } from "react"
import signupImage from '../../../assets/signupImage.png'
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible , AiFillEye } from 'react-icons/ai';
import './LogInAndSignUp.css'

const SignUp = (props) => {

    const [newUserData , setnewUserData] = useState({UserType : "" ,FirstName : "" , LastName : "" , Email : "" , CreatePassword : "" ,ConfirmPassword : ""});

    const [creshowPassword , setcreShowPassword] = useState(false);
    const [cnfshowPassword , setcnfShowPassword] = useState(false);

    function currentUserRole(e){
        e.preventDefault();
        let ele = e.target.parentElement;
        ele = ele.children;
        if(e.target == ele[0]){
            ele[0].style.backgroundColor = "rgb(188, 188, 188)";
            ele[1].style.backgroundColor = "rgb(81, 79, 79)"
        }
        else{
            ele[1].style.backgroundColor = "rgb(188, 188, 188)";
            ele[0].style.backgroundColor = "rgb(81, 79, 79)"
        }
        setnewUserData( (prev) => ({
            ...prev , UserType : e.target.name
        }))
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(newUserData);
        if(newUserData.CreatePassword !== newUserData.ConfirmPassword){
            alert("password not matching")
        }
        else
            props.fun();
    }

    function changeHandler(e){
        setnewUserData( (prevData) => ({
            ...prevData , [e.target.name] : e.target.value
        }))
    }

    function crePasswordHandler(e){
        setcreShowPassword(!creshowPassword);
        const tar = document.querySelector('#crePassword');
        if(!creshowPassword){
          tar.type = "text"
        }
        else{
          tar.type = "password"
        }
    }

    function cnfPasswordHandler(e){
        setcnfShowPassword(!cnfshowPassword);
        const tar = document.querySelector('#cnfPassword');
        if(!cnfshowPassword){
          tar.type = "text"
        }
        else{
          tar.type = "password"
        }
    }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
      <form className="signup-form" onSubmit={submitHandler}>
            <div className="signup-text">
                <h1>Join the millions learning to code with StudyNotion for free</h1>
                <span>Build skills for today / tomorrow and beyond</span>
                <br></br>
                <span className="signup-bluetxt">Education to future proof your career</span>
            </div>
            <div className="selectUser">
                <button onClick={currentUserRole} name="Student">Student</button>
                <button onClick={currentUserRole} name="Instructor">Instructor</button>
            </div>
            <div className="signupPersonalDetails">
                <div className="signupfName">
                    <label htmlFor="fname">First Name</label>
                    <br></br>
                    <input placeholder="Enter First Name" id="fname" type="text" name="FirstName" onChange={changeHandler} value={newUserData.FirstName}></input>
                </div>
                <div className="signuplName">
                    <label htmlFor="lname">Last Name</label>
                    <br></br>
                    <input placeholder="Enter Last Name" id="lname" type="text" name="LastName" onChange={changeHandler} value={newUserData.LastName}></input>
                </div>
            </div>
            <div className="signupEmail">
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input type="email" placeholder="Enter Email Address" id="email" name="Email" onChange={changeHandler} value={newUserData.Email}></input>
            </div>
            <div className="signup-password">
                <div className="crePassword">
                    <label htmlFor="crePassword">Create Password</label>
                    <br></br>
                    {
                        !creshowPassword ? (
                            <AiFillEyeInvisible className="signupEyeLogo" onClick={crePasswordHandler}></AiFillEyeInvisible>
                            ) : (
                            <AiFillEye className="signupEyeLogo" onClick={crePasswordHandler}></AiFillEye>
                        )
                    }
                    {/* <AiFillEyeInvisible className="signupEyeLogo"></AiFillEyeInvisible> */}
                    <input placeholder="Create Password" id="crePassword" type="password" name="CreatePassword" onChange={changeHandler}value={newUserData.CreatePassword}></input>

                </div>
                <div className="cnfPassword">
                    <label htmlFor="cnfPassword">Confirm Password</label>
                    <br></br>
                    {
                        !cnfshowPassword ? (
                            <AiFillEyeInvisible className="signupEyeLogo" onClick={cnfPasswordHandler}></AiFillEyeInvisible>
                            ) : (
                            <AiFillEye className="signupEyeLogo" onClick={cnfPasswordHandler}></AiFillEye>
                        )
                    }
                    {/* <AiFillEyeInvisible className="signupEyeLogo"></AiFillEyeInvisible> */}
                    <input placeholder="Confirm Password" id="cnfPassword" type="password" name="ConfirmPassword" onChange={changeHandler}value={newUserData.ConfirmPassword}></input>
                </div>
            </div>
            <button className="createAccount" >Create Account</button>
            <div className="signup-google">
                <button><FcGoogle className="signup-google-logo"></FcGoogle>Sign in with Google</button>
            </div>
        </form>
        <img src={signupImage} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default SignUp;
