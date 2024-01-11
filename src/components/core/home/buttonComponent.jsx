import React from "react"
import { Link } from "react-router-dom";
import './buttonComponent.css'

const ButtonComponent = ({text , active , linkTo}) => {
  return (
    <div>
      <Link to={linkTo} className="link">
        {
            active ? <div className="yellow">{text}</div> : <div className="black">{text}</div>
        }
      </Link>
    </div>
  )
};

export default ButtonComponent;
