import React, { useEffect, useRef, useState } from "react"
import './EnterOtp.css'
import ButtonComponent from "../home/buttonComponent";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser_SignUp_ForBackend } from "../../../services/operations/auth";

const EnterOtp = (props) => {

    const [otp , setopt] = useState(["-","-","-","-","-","-"]);
    const [currFocus , setCurrFocus] = useState(0);

    const setFocus = useRef(null);
    const navigate = useNavigate();
    const  dispatch = useDispatch();
    const userData = useSelector((state) => (state.auth.signupData));

    useEffect(() => {
        if(setFocus.current){
            setFocus.current.focus();
        }
    } , [otp]);

    function verifyEmailHandler(){
        //now we have to verify the email and if the opt is currect we have to create the user
        //into the db as a new user
        const stringifiedOtp = otp.join('');
        const dataPayload = {...userData , otp : stringifiedOtp};
        // console.log('the created data payload for account creation is : ' , dataPayload);
        dispatch(createUser_SignUp_ForBackend(navigate,dataPayload));
    }

    function otpHandler(e , index) {
        const boxElement = e.target.value;
        setopt((prevotp) => {
            const newOtp = [...prevotp];
            newOtp[index] = boxElement;
            setCurrFocus(prev => (
                boxElement === "" ? (index-1 > 0 ? index-1 : 0) : (index+1 < 6 ? index+1 : 5)
            ))

            return newOtp
        })
    }

  return (
    <div className="enterOtp_wrapper">
      <div className="enterOtp">
        <h1>Verify email</h1>
        <p>A verification code has been sent to you. Enter the code below</p>
        <div className="otp_filling_container">
            {
                otp.map((eachele , index) => {
                    return(
                            index === currFocus ? (
                                <input type="text" placeholder="-" key={index} 
                                onChange={(e)=> {
                                    otpHandler(e,index);
                                }}
                                className="yellow_focus_border" ref={setFocus} maxLength={1}
                                ></input>
                            ) : (
                                <input type="text" placeholder="-" key={index} maxLength={1}
                                onClick={()=>{
                                    setCurrFocus(index);
                                }}
                                ></input>
                            )
                    )
                })
            }
        </div>
        <div onClick={verifyEmailHandler}>
            <ButtonComponent active={true} linkTo={"#"}>Verify email</ButtonComponent>
        </div>
        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
            <div>
                <FaClockRotateLeft></FaClockRotateLeft>
                Resend it
            </div>
        </div>
      </div>
    </div>
  )
};

export default EnterOtp;
