import React from "react"
import './UserProfileDropDown.css'
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../services/operations/auth";

const UserProfileDropDown = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.profile.user);
  // console.log('user data in dropdown : ' , userData);
  return (
    <div className="userProfileDropDown_wrapper">
      <div className="userProfileDropDown">
        {
          userData && userData.image && <img src={userData.image} alt="" height={25}></img>
        }
        <IoMdArrowDropdown />
        <div className="userProfileDropDown_hover">

          <div onClick={() => {
            navigate('/dashboard/my-profile')
          }}>Profile</div>

          <div onClick={()=>{
            dispatch(userLogout(navigate));
          }}>LogOut</div>

        </div>
      </div>
    </div>
  )
};

export default UserProfileDropDown;
