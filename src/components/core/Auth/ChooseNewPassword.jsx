import React, { useState } from "react"
import { FaLongArrowAltLeft } from "react-icons/fa";
import './ChooseNewPassword.css'
import ButtonComponent from "../home/buttonComponent";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import PasswordInputComponent from '../../common/PasswordInputComponent'

const ChooseNewPassword = (props) => {

  const [validity , setValidity] = useState({lowercase:false , uppercase:false , special:false , 
                                              number:false , size : false});

  const [newPassword , setNewPassword] = useState(null);
  const [confirmNewPassword , setConfirmNewPassword] = useState(null);

    function changeHandler(e){
      const currentPassword = e.target.value;

      setValidity((prev) => {
        const updatedValidity = {...prev};
        for(let i=0;i<currentPassword.length;i++){
          const newInput = currentPassword[i];
          if(newInput>='0' && newInput<='9'){
            updatedValidity.number = true    
          }
          else if(newInput>='a' && newInput<='z'){
            updatedValidity.lowercase = true
          }
          else if(newInput>='A' && newInput<='Z'){
            updatedValidity.uppercase = true
          }
          else{
            updatedValidity.special = true
          }
        }
       
        if(currentPassword.length>=8){
          updatedValidity.size = true
        }
        else{
          updatedValidity.size = false
        }
        return updatedValidity;
      });

    }

    function submitHandler(e){
      //e.preventDefault();

      //now make sure that all password validity conditions are satisfied
      if(!validity.lowercase||!validity.uppercase||!validity.size||!validity.special||!validity.number){
        alert("All password valdation conditions not fulfilled");
        window.location.reload();
      }
      
      if(newPassword !== confirmNewPassword){
        alert("Passwords do not match");
        window.location.reload();
      }
      console.log(newPassword , confirmNewPassword);
    }

  return (
    <div className="chooseNewPassword_wrapper">
      <div className="ChooseNewPassword">
        <h2>Choose New Password</h2>
        <p>
            Almost done. Enter your new password and you are all set.
        </p>
        <div onChange={changeHandler}>
          <PasswordInputComponent fetchPassword={setNewPassword} title={"New Password"} placeholder={"Enter New Password"}>
          </PasswordInputComponent>
        </div>

        <PasswordInputComponent fetchPassword={setConfirmNewPassword} title={"Confirm New Password"} placeholder={"Confirm Above Password"}></PasswordInputComponent>

        <div className="password_validator">
            <div>
                <div className={validity.lowercase ? "greenCheck" : ""}>
                  <FaCheckCircle />one lowercase character
                </div>
                <div className={validity.uppercase ? "greenCheck" : ""}>
                  <FaCheckCircle />one uppercase character
                </div>
                <div className={validity.number ? "greenCheck" : ""}>
                  <FaCheckCircle />one number
                </div>
            </div>
            <div>
                <div className={validity.special ? "greenCheck" : ""}>
                  <FaCheckCircle />one special character
                </div>
                <div className={validity.size ? "greenCheck" : ""}>
                  <FaCheckCircle />8 character minimum
                </div>
            </div>
        </div>

        <div onClick={submitHandler}>
          <ButtonComponent active={true} >Reset Password</ButtonComponent>
        </div>

        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
        </div>

      </div>
    </div>
  )
};

export default ChooseNewPassword;
