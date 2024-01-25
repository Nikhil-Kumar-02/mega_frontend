import React, { useState } from "react"
import signupImage from '../../../assets/signupImage.png'
// import { FcGoogle } from 'react-icons/fc';
import './LogInAndSignUp.css';
import { CgAsterisk } from "react-icons/cg";
import PasswordInputComponent from '../../common/PasswordInputComponent';

const SignUp = (props) => {

    const [newUserData , setnewUserData] = useState({UserType : "Student" ,FirstName : "" , LastName : "" , Email : "" , CreatePassword : "" ,ConfirmPassword : ""});


    function currentUserRole(e){
        // e.preventDefault();
        const val = e.target.value;
        console.log(e.target);
        console.log(val);
        // setnewUserData( (prev) => ({
        //     ...prev , UserType : e.target.name
        // }))
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

    // function crePasswordHandler(e){
    //     setcreShowPassword(!creshowPassword);
    //     const tar = document.querySelector('#crePassword');
    //     if(!creshowPassword){
    //       tar.type = "text"
    //     }
    //     else{
    //       tar.type = "password"
    //     }
    // }

    // function cnfPasswordHandler(e){
    //     setcnfShowPassword(!cnfshowPassword);
    //     const tar = document.querySelector('#cnfPassword');
    //     if(!cnfshowPassword){
    //       tar.type = "text"
    //     }
    //     else{
    //       tar.type = "password"
    //     }
    // }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
      <form className="signup-form" onSubmit={submitHandler}>

            <div className="signup-text">
                <h1>Join the millions learning to code with StudyNotion for free</h1>
                <span>Build skills for today / tomorrow and beyond</span>
                <span className="signup-bluetxt">Education to future proof your career</span>
            </div>

            <div className="selectUser">
                <div onClick={currentUserRole} name="Student" 
                className={newUserData.UserType === "Student" ? "selectedUser" : ""}>Student</div>
                
                <div onClick={currentUserRole} name="Instructor"
                className={newUserData.UserType === "Instructor" ? "selectedUser" : ""}
                >Instructor</div>
            </div>

            <div className="signupPersonalDetails">
                <div className="signupfName">
                    <label htmlFor="fname">First Name<CgAsterisk></CgAsterisk></label>
                    <br></br>
                    <input placeholder="Enter First Name" id="fname" type="text" name="FirstName" onChange={changeHandler} value={newUserData.FirstName}></input>
                </div>
                <div className="signuplName">
                    <label htmlFor="lname">Last Name<CgAsterisk></CgAsterisk></label>
                    <br></br>
                    <input placeholder="Enter Last Name" id="lname" type="text" name="LastName" onChange={changeHandler} value={newUserData.LastName}></input>
                </div>
            </div>
            
            <div className="signupEmail">
                <label htmlFor="email">Email Address<CgAsterisk></CgAsterisk></label>
                <br></br>
                <input type="email" placeholder="Enter Email Address" id="email" name="Email" onChange={changeHandler} value={newUserData.Email}></input>
            </div>

            <div className="phoneNumber_wrapper">
                <label htmlFor="phoneNumber">Phone Number<CgAsterisk></CgAsterisk></label>
                <div className="phoneNumber">
                    <div>
                        <select name="dog-names" id="dog-names"> 
                            <option value="bangladesh">+880</option> 
                            <option value="india">+91</option> 
                            <option value="nepal">+977</option> 
                            <option value="pakistan">+92</option> 
                            <option value="sri lanka">+94</option> 
                        </select>
                    </div>
                    <input type="text" placeholder="Enter phone number" id="phoneNumber" name="phoneNumber" onChange={changeHandler}></input>
                </div>
            </div>

            <div className="signup-password">
                
                <PasswordInputComponent title={"Create Password"} placeholder={"Enter Password"}
                fetchPassword={(passwordRecieved) => {
                    setnewUserData( (prev) => ({
                        ...prev , CreatePassword : passwordRecieved
                    } ) )
                }}>
                </PasswordInputComponent>

                <PasswordInputComponent placeholder={"Enter Password"} title={"Confirm Password"} 
                fetchPassword={(passwordRecieved) => {
                    setnewUserData( (prev) => ({
                        ...prev , confirmPassword : passwordRecieved
                    } ) )
                }}>
                </PasswordInputComponent>
                
            </div>

            <div className="createAccount" >Create Account</div>

            {/* <div className="signup-google">
                <button><FcGoogle className="signup-google-logo"></FcGoogle>Sign in with Google</button>
            </div> */}
        </form>
        <img src={signupImage} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default SignUp;
