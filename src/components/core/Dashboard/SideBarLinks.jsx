import React from "react"
import './SideBarLinks.css'
import * as Icons from 'react-icons/vsc';
import { useLocation, useNavigate } from "react-router-dom";

const SideBarLinks = ({eachTabData}) => {
    const {name , path , icon} = eachTabData;
    const ExtractedIcon = Icons[icon];
    const navigate = useNavigate();
    const location = useLocation();

    function clickHandler(){
        navigate(path);
    }

  return (
    <div className="userSideBar_wrapper">
        <div className={path === location.pathname ? "currentSideBarTab" : ""} onClick={clickHandler}>
            <div><ExtractedIcon></ExtractedIcon></div>
            <div>{name}</div>
        </div>
    </div>
  )
};

export default SideBarLinks;
