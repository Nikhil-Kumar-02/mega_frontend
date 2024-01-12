import React from "react"
import { Link } from "react-router-dom";
import './buttonComponent.css'

const ButtonComponent = ({children , active , linkTo}) => {
  return (
    <div>
      <Link to={linkTo} className="button_Link">
        {
            active ? <div className="yellow_btn">{children}</div> : <div className="black_btn">{children}</div>
        }
      </Link>
    </div>
  )
};

export default ButtonComponent;
