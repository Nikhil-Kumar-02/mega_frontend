import React, { useState } from "react"
import './SideBar.css';
import { sidebarLinks } from "../../../data/dashboardLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBarLinks from "./SideBarLinks";
import { IoSettings } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationalModal from "../../common/ConfirmationalModal";
import { userLogout } from "../../../services/operations/auth";


const SideBar = (props) => {

  const user = useSelector((state) => (state.profile.user));
  const navigate = useNavigate();
  const location = useLocation();
  const [confirmationModalVisibility , setConfirmationModalVisibility] = useState(false);
  const dispatch = useDispatch();

  function logOutUser(){
    dispatch(userLogout(navigate));
  }


  return (
    <div className="sideBar_wrapper">
      {
        sidebarLinks.map((eachOption) => {
          if(eachOption.type && eachOption.type !== user?.accountType) return null;
          return (
            <SideBarLinks id={eachOption.id} eachTabData={eachOption}></SideBarLinks>
          )
        })
      }
      <br></br>
      <hr></hr>
      <br></br>

      <div className="userSideBar_wrapper">

        <div className={"/dashboard/setting" === location.pathname ? "currentSideBarTab" : ""}    onClick={() => navigate("/dashboard/setting")}>
          <div><IoSettings></IoSettings></div>
          <div>Setting</div>
        </div>

        <div onClick={()=>{
            setConfirmationModalVisibility(true)
          }}>
          <div><VscSignOut></VscSignOut></div>
          <div>Logout</div>
        </div>
      </div>

      {
        confirmationModalVisibility && 
        <ConfirmationalModal setConfirmationModalVisibility={setConfirmationModalVisibility}
        text1={"Are You Sure ?"} text2={"You will be logged out of your account."} button1={"LogOut"} button2={"Cancel"} confirmationFunctionality={logOutUser}></ConfirmationalModal>
      }
    </div> 
  )
};

export default SideBar;
