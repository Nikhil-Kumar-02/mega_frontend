import React, { useState } from "react"
import signupImage from '../../../assets/signupImage.png'
// import { FcGoogle } from 'react-icons/fc';
import './LogInAndSignUp.css';
import { CgAsterisk } from "react-icons/cg";
import PasswordInputComponent from '../../common/PasswordInputComponent';
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignUpRequestForBackend } from "../../../services/operations/auth";

const SignUp = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newUserData , setnewUserData] = useState({accountType : "Student" ,firstName : "" , lastName : "" , email : "" , password : "" ,confirmPassword : "" , phoneNumber : "",
    CountryCode : "+91"});

    function currentUserRole(e){
        const val = e.target.getAttribute("name");
        setnewUserData( (prev) => ({
            ...prev , accountType : val
        }))
    }
    
    // console.log(newUserData.password , newUserData.ConfirmPassword)
    function submitHandler(e){
        e.preventDefault();
        if(newUserData.password !== newUserData.confirmPassword){
            alert("Password not matching")
            return;
        }
        let conditions = {
            lowercase : false,
            uppercase : false,
            special : false,
            number : false,
            size : false
        }
        for(let i=0;i<newUserData.password.length;i++){
            if(newUserData.password[i]>='a' && newUserData.password[i]<='z'){
                conditions.lowercase = true
            }
            else if(newUserData.password[i]>='A' && newUserData.password[i]<='Z'){
                conditions.uppercase = true
            }
            else if(newUserData.password[i]>='1' && newUserData.password[i]<='9'){
                conditions.number = true
            }
            else{
                conditions.special = true
            }
        }
        if(newUserData.password.length>=8){
            conditions.size = true
        }
        for(const cond in conditions){
            if(!conditions[cond]){
                console.log('condition not satisfied' , cond);
                alert(`Password conditions not satisfied`);
                return;
            }
        }
        console.log(newUserData);
        dispatch(userSignUpRequestForBackend(navigate , newUserData));
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
                className={newUserData.accountType === "Student" ? "selectedUser" : ""}>Student</div>
                
                <div onClick={currentUserRole} name="Instructor"
                className={newUserData.accountType === "Instructor" ? "selectedUser" : ""}
                >Instructor</div>
            </div>

            <div className="signupPersonalDetails">
                <div className="signupfName">
                    <label htmlFor="fname">First Name<CgAsterisk></CgAsterisk></label>
                    <br></br>
                    <input placeholder="Enter First Name" id="fname" type="text" name="firstName" onChange={changeHandler} value={newUserData.firstName}></input>
                </div>
                <div className="signuplName">
                    <label htmlFor="lname">Last Name<CgAsterisk></CgAsterisk></label>
                    <br></br>
                    <input placeholder="Enter Last Name" id="lname" type="text" name="lastName" onChange={changeHandler} value={newUserData.lastName}></input>
                </div>
            </div>
            
            <div className="signupEmail">
                <label htmlFor="email">Email Address<CgAsterisk></CgAsterisk></label>
                <br></br>
                <input type="email" placeholder="Enter Email Address" id="email" name="email" onChange={changeHandler} value={newUserData.email}></input>
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
                    <input type="text" placeholder="Enter phone number" id="phoneNumber" name="phoneNumber" value={newUserData.phoneNumber} onChange={changeHandler}></input>
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
                            ...prev , password : passwordRecieved
                        } ) )
                    }}>
                    </PasswordInputComponent>
                </div>

                <PasswordInputComponent placeholder={"Enter Password"} title={"Confirm Password"} 
                fetchPassword={(passwordRecieved) => {
                    setnewUserData( (prev) => ({
                        ...prev , confirmPassword : passwordRecieved
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
