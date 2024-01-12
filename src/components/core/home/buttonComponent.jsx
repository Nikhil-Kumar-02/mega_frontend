import React from "react"
import { Link } from "react-router-dom";
import './buttonComponent.css'

const ButtonComponent = ({children , active , linkTo}) => {
  return (
    <div>
      <Link to={linkTo} className="link">
        {
            active ? <div className="yellow">{children}</div> : <div className="black">{children}</div>
        }
      </Link>
    </div>
  )
};

export default ButtonComponent;
