import React from "react"
import { Link } from "react-router-dom";
import './buttonComponent.css'
import { FaArrowRight } from "react-icons/fa";


const ButtonComponent = ({children , active , linkTo , arrow}) => {
  console.log(arrow);
  return (
    <div>
      <Link to={linkTo} className="button_Link">
        {
          active ? 
          <div className="yellow_btn">{children} {arrow&&<FaArrowRight/>}</div> 
          :
         <div className="black_btn">{children} {arrow&&<FaArrowRight/>}</div>
        }
      </Link>
    </div>
  )
};

export default ButtonComponent;
