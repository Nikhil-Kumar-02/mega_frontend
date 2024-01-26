import React, { useState } from "react"
import signupImage from '../../../assets/signupImage.png'
// import { FcGoogle } from 'react-icons/fc';
import './LogInAndSignUp.css';
import { CgAsterisk } from "react-icons/cg";
import PasswordInputComponent from '../../common/PasswordInputComponent';
import { HiInformationCircle } from "react-icons/hi";

const SignUp = (props) => {

    const [newUserData , setnewUserData] = useState({UserType : "Student" ,FirstName : "" , LastName : "" , Email : "" , CreatePassword : "" ,ConfirmPassword : "" , PhoneNumber : "",
    CountryCode : "+91"});


    function currentUserRole(e){
        const val = e.target.getAttribute("name");
        setnewUserData( (prev) => ({
            ...prev , UserType : val
        }))
    }
    
    // console.log(newUserData.CreatePassword , newUserData.ConfirmPassword)
    function submitHandler(e){
        e.preventDefault();
        if(newUserData.CreatePassword !== newUserData.ConfirmPassword){
            alert("Password not matching")
        }
        let conditions = {
            lowercase : false,
            uppercase : false,
            special : false,
            number : false,
            size : false
        }
        for(let i=0;i<newUserData.CreatePassword.length;i++){
            if(newUserData.ConfirmPassword[i]>='a' && newUserData.ConfirmPassword[i]<='z'){
                conditions.lowercase = true
            }
            else if(newUserData.ConfirmPassword[i]>='A' && newUserData.ConfirmPassword[i]<='Z'){
                conditions.uppercase = true
            }
            else if(newUserData.ConfirmPassword[i]>='1' && newUserData.ConfirmPassword[i]<='9'){
                conditions.number = true
            }
            else{
                conditions.special = true
            }
        }
        if(newUserData.ConfirmPassword.length>=8){
            conditions.size = true
        }
        for(const cond in conditions){
            if(!conditions[cond]){
                console.log('condition not satisfied' , cond);
                alert(`Password conditions not satisfied`);
                break;
            }
        }
        console.log(newUserData);
    }

    function changeHandler(e){
        console.log(e.target.name , e.target.value);
        setnewUserData( (prevData) => ({
            ...prevData , [e.target.name] : e.target.value
        }))
    }

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
                        <select name="CountryCode" onChange={changeHandler}> 
                            <option name="CountryCode">+91</option> 
                            <option name="CountryCode">+880</option> 
                            <option name="CountryCode">+977</option> 
                            <option name="CountryCode">+92</option> 
                            <option name="CountryCode">+94</option> 
                        </select>
                    </div>
                    <input type="text" placeholder="Enter phone number" id="phoneNumber" name="PhoneNumber" value={newUserData.PhoneNumber} onChange={changeHandler}></input>
                </div>
            </div>

            <div className="signup-password">
                <div>
                    <div className="information_icon">
                        <span><HiInformationCircle /></span>
                        <div className="information_data">
                            <p>- one lowercase</p>
                            <p>- one uppercase</p>
                            <p>- one number</p>
                            <p>- one special</p>
                            <p>- 8 character minimum</p>
                        </div>
                    </div>
                    <PasswordInputComponent title={"Create Password"} placeholder={"Enter Password"}
                    fetchPassword={(passwordRecieved) => {
                        setnewUserData( (prev) => ({
                            ...prev , CreatePassword : passwordRecieved
                        } ) )
                    }}>
                    </PasswordInputComponent>
                </div>

                <PasswordInputComponent placeholder={"Enter Password"} title={"Confirm Password"} 
                fetchPassword={(passwordRecieved) => {
                    setnewUserData( (prev) => ({
                        ...prev , ConfirmPassword : passwordRecieved
                    } ) )
                }}>
                </PasswordInputComponent>
                
            </div>

            <div className="createAccount" onClick={submitHandler}>Create Account</div>

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
