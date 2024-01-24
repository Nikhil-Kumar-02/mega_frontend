import React from "react"
import './ResetComplete.css'
import ButtonComponent from '../home/buttonComponent';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";



const ResetComplete = (props) => {
  return (
    <div className="resetComplete_wrapper">
      <div className="resetComplete">
        <h2>Reset Complete</h2>
        <p>All done. We have sent you an email to youremail@gmail.com to confirm</p>
        <ButtonComponent active={true} linkTo={"/logIn"}>Return to login</ButtonComponent>
        <div>
            <Link to={"/logIn"}><FaLongArrowAltLeft /> Back to login</Link>
        </div>
      </div>
    </div>
  )
};

export default ResetComplete;
