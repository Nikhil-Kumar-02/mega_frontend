import React from "react"
import './DashBoard.css'
import { useSelector } from "react-redux";
import SideBar from "../components/core/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = (props) => {

  const {loading:profileLoading} = useSelector((state) => (state.profile));
  const {loading : authLoading} = useSelector((state) => (state.auth));

  if(profileLoading || authLoading){
    return (
      <div className="custom-loader"></div>
    )
  }

  return (
    <div className="whole_dashboard_wrapper">
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  )
};

export default Dashboard;
