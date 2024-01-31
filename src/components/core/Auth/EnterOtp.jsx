import React, { useEffect, useRef, useState } from "react"
import './EnterOtp.css'
import ButtonComponent from "../home/buttonComponent";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const EnterOtp = (props) => {

    const [otp , setopt] = useState(["-","-","-","-","-","-"]);
    const [currFocus , setCurrFocus] = useState(0);

    const setFocus = useRef(null);

    useEffect(() => {
        if(setFocus.current){
            setFocus.current.focus();
        }
    } , [otp])

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
        <ButtonComponent active={true} linkTo={"#"}>Verify email</ButtonComponent>
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
