import React, { useState } from "react"
import './SideBar.css';
import { sidebarLinks } from "../../../data/dashboardLinks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarLinks from "./SideBarLinks";
import { IoSettings } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationalModal from "../../common/ConfirmationalModal";


const SideBar = (props) => {

  const user = useSelector((state) => (state.profile.user));
  const navigate = useNavigate();
  const [confirmationModalVisibility , setConfirmationModalVisibility] = useState(false);


  return (
    <div className="sideBar_wrapper">
      {
        sidebarLinks.map((eachOption) => {
          if(eachOption.type && eachOption.type !== user.accountType) return null;
          return (
            <SideBarLinks id={eachOption.id} eachTabData={eachOption}></SideBarLinks>
          )
        })
      }
      <br></br>
      <hr></hr>
      <br></br>

      <div className="userSideBar_wrapper">

        <div onClick={()=>{
          navigate("/dashboard/setting")
        }}>
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
        <ConfirmationalModal setConfirmationModalVisibility={setConfirmationModalVisibility}></ConfirmationalModal>
      }
    </div> 
  )
};

export default SideBar;
