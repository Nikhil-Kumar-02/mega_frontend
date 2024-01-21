import React from "react"
import { Link, matchPath, useLocation } from "react-router-dom";
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { NavbarLinks } from "../../data/NavbarLinks";
import logo from '../../assets/logo.png'
import SignUpLogIn from "./signUpLogIn";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import UserProfileDropDown from "../core/Auth/UserProfileDropDown";

const Navbar = (props) => {

  const location = useLocation();

  const {token} = useSelector((state) => state.auth);
  const {totalItems} = useSelector((state) => state.cart);
  const user = useSelector((state) => state.profile.user);

  function matchRoute(currPath){
    console.log('location is ' ,location.pathname ,'curr path is ' , currPath);
    return matchPath(currPath , location.pathname);
  }

  return (
    <div className="navbar_wrapper">
      <div>
        <Link to={"/"}>
          <img src={logo} height={25} alt=""></img>
        </Link>
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

      {/* login signup dashboard */}
      <div>
        {/* if user is not logged in then value in user will be null  */}
        {
          user && user.accountType !== "Instructor" && (
            <Link to={'/dashboard/cart'}>
              <FaShoppingCart />
              {
                totalItems > 0 && (
                  <span>{totalItems}</span>
                )
              }
            </Link>
          )
        }
        {/* if there is no token that is it is null so we have to show login button */}
        {
          token === null && (<SignUpLogIn></SignUpLogIn>)
        }
        {/* if token exits then there exists a user so he will have a profile so we wil list that */}
        {
          token !== null && <UserProfileDropDown></UserProfileDropDown>
        } 
      </div>
    </div>
  )
};

export default Navbar;
