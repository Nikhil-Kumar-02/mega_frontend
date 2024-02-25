import React, { useEffect, useState } from "react"
import { Link, Outlet, matchPath, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { NavbarLinks } from "../../data/NavbarLinks";
import logo from '../../assets/logo.png'
import SignUpLogIn from "./signUpLogIn";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import UserProfileDropDown from "../core/Auth/UserProfileDropDown";
import {requestBackend}  from '../../services/apiConnector';
import {courseAllRoutes} from '../../services/apiRoutes';


const Navbar = (props) => {

  const location = useLocation();

  const {token} = useSelector((state) => state.auth);
  const {totalItems} = useSelector((state) => state.cart);
  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate();

  const [allCategories , setAllCategories] = useState([""]);

  async function getCategories(){
    const responseInNavbar = await requestBackend('GET' , courseAllRoutes.getAllCategories);
    console.log('the response in navbar is : ', responseInNavbar);
    setAllCategories(responseInNavbar?.data?.allCategories);
  }

  useEffect( () => {
    getCategories();
  } , [])

  function matchRoute(currPath){
    return matchPath(currPath , location.pathname);
  }

  return (
    <>
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
              eachLink.title === "Catalog" ? (
                <div className="catelog_container">
                  <div className="catelog_container_catelog">
                    {eachLink.title}<IoIosArrowDown/>
                  </div>
                  <div className="onHover_elements_container">
                    <div className="vertical_square"></div>
                      <div className="visible_on_hover_text">
                      { 
                        !allCategories ? 
                        (
                          <div class="custom-loader"></div>
                        )
                        :
                        (
                          allCategories.length > 0 && 
                          allCategories.map((categories) => (
                            <div onClick={() => {navigate(`/catelog/${categories._id}`)
                            console.log("the passing category data : " , categories)}}>{categories.name}</div>
                          ))
                        )
                      }
                    </div>
                  </div>
                </div>) 
              :
              (<div className={ matchRoute(eachLink.path) ? "yellowLink" : "whiteLink"}>
                <Link to={eachLink.path}>{eachLink.title}</Link>
              </div>)
            }</div>
          ))
        }
      </div>

      {/* login signup dashboard */}
      <div className="navbar_right_end_contents">
        {/* if user is not logged in then value in user will be null  */}
        <div className="cart_logo">
        {
          user && user.accountType !== "Instructor" && (
            <Link to={'/dashboard/cart'}>
              <FaShoppingCart color="white" fontSize={"1.1rem"} />
              {
                totalItems > -1 && (
                  <span>{totalItems}</span>
                )
              }
            </Link>
          )
        }
        </div>
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
      <Outlet></Outlet>
    </>
  )
};

export default Navbar;
