import React from "react"
import { Link } from "react-router-dom";
import './Navbar.css'
import { TbLetterS } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = (props) => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_logo_wrapper">
        <div><TbLetterS /></div>
        <div>StudyNotion</div>
      </div>
      <div>
        <div>Home</div>
        <div>
            Catelog
            <IoIosArrowDown />
        </div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div>
        <div>
            <Link to={"/logIn"}>Log In</Link>
        </div>
        <div>
            <Link to={"/signUp"}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
