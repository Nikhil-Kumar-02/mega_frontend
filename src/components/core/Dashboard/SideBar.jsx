import React from "react"
import './SideBar.css';
import { sidebarLinks } from "../../../data/dashboardLinks";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarLinks from "./SideBarLinks";
import { IoSettings } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";

const SideBar = (props) => {

  const {user , loading:profileLoading} = useSelector((state) => (state.profile));
  const data = useSelector((state) => (state.profile.user));
  const {loading : authLoading} = useSelector((state) => (state.auth));
  const navigate = useNavigate();

  if(profileLoading || authLoading){
    return (
      <div className="custom-loader"></div>
    )
  }


  return (
    <div className="whole_dashboard_wrapper">
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
            navigate("/setting")
          }}>
            <div><IoSettings></IoSettings></div>
            <div>Setting</div>
          </div>
          <div>
            <div><VscSignOut></VscSignOut></div>
            <div>Logout</div>
          </div>
        </div>

      </div>

      <Outlet></Outlet>

    </div>
  )
};

export default SideBar;
