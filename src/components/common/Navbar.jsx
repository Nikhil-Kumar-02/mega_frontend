import React from "react"
import { Link, matchPath, useLocation } from "react-router-dom";
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { NavbarLinks } from "../../data/NavbarLinks";
import logo from '../../assets/logo.png'
import SignUpLogIn from "./signUpLogIn";

const Navbar = (props) => {

  const location = useLocation();

  function matchRoute(currPath){
    return matchPath(currPath , location.pathname);
  }

  return (
    <div className="navbar_wrapper">
      <div>
        <img src={logo} height={25}></img>
      </div>
      <div className="navbar_links_wrapper">
        {
          NavbarLinks.map((eachLink , index)=>(
            <div key={index}>{
              eachLink.title === "Catalog" ? (<div>{eachLink.title}<IoIosArrowDown/></div>) 
              :
              (<div className={ matchRoute(eachLink.path) ? "yellowLink" : "whiteLink"}>
                <Link to={eachLink.path}>{eachLink.title}</Link>
              </div>)
            }</div>
          ))
        }
      </div>
      <SignUpLogIn></SignUpLogIn>
    </div>
  )
};

export default Navbar;
