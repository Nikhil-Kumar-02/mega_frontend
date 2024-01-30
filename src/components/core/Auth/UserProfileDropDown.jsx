import React from "react"
import './UserProfileDropDown.css'
import { useSelector } from "react-redux";

const UserProfileDropDown = (props) => {
  const userData = useSelector((state) => state.profile.user);
  console.log('user data in dropdown : ' , userData);
  return (
    <div className="userProfileDropDown_wrapper">
      <div className="userProfileDropDown">
      {
        userData && userData.image && <img src={userData.image} alt="" height={25}></img>
      }
      </div>
    </div>
  )
};

export default UserProfileDropDown;
