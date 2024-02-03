import React from "react"
import './UserProfile.css'
import { useSelector } from "react-redux";
import ButtonComponent from '../home/buttonComponent';
import { FaRegEdit } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";

const UserProfile = (props) => {

    const userData = useSelector((state) => (state.profile.user));

  return (
    <div className="Whole_UserProfile_wrapper">
        <div className="userSideBar">
            <div>
                <div>{userData.accountType === "Instructor" ? <FaUserGraduate
                ></FaUserGraduate> : <FaUserCircle></FaUserCircle>}</div>
                <div>My Profile</div>
            </div>
            <div>
                <div><FaGraduationCap></FaGraduationCap></div>
                <div>Enrolled Courses</div>
            </div>
            <div>
                <div><FaCartArrowDown></FaCartArrowDown></div>
                <div>Cart</div>
            </div>
            <hr></hr>
            <div>
                <div><IoSettings></IoSettings></div>
                <div>Setting</div>
            </div>
            <div>
                <div><VscSignOut></VscSignOut></div>
                <div>Logout</div>
            </div>
        </div>

        <div className="userProfile_wrapper">
            <div className="userProfile">
                <h1>My Profile</h1>
                <div className="userProfile_section1">
                    <div>
                        <img src={userData.image} alt=""></img>
                        <div>
                            <h4>{`${userData.firstName} ${userData.lastName}`}</h4>
                            <p>{userData.email}</p>
                        </div>
                    </div>
                    <div className="userProfile_Edit">
                        <ButtonComponent active={true}><div>
                            Edit
                            <FaRegEdit></FaRegEdit>
                        </div></ButtonComponent>
                    </div>
                </div>

                <div className="userProfile_section2">
                    <div>
                        <h4>About</h4>
                        <div className="userProfile_Edit">
                            <ButtonComponent active={true}><div>
                                Edit
                                <FaRegEdit></FaRegEdit>
                            </div></ButtonComponent>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Write something about yourself"></textarea>
                    </div>
                </div>

                <div className="userProfile_section3">
                    <div className="userProfile_Edit">
                        <h4>Personal Details</h4>
                        <ButtonComponent active={true}><div>
                            Edit
                            <FaRegEdit></FaRegEdit>
                        </div></ButtonComponent>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>First Name</p>
                                <h4>{userData.firstName}</h4>
                            </div>
                            <div>
                                <p>Email</p>
                                <h4>{userData.email}</h4>
                            </div>
                            <div>
                                <p>Gender</p>
                                <h4>{userData?.gender ? userData.gender : "Add Gender"}</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Last Name</p>
                                <h4>{userData.lastName}</h4>
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <h4>{userData.phonenumber ? userData.phonenumber : "Add Contact Number"}</h4>
                            </div>
                            <div>
                                <p>Date Of Birth</p>
                                <h4>{userData.dob ? userData.dob : "Add Date of Birth"}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default UserProfile;
