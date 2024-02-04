import React from "react"
import './MyProfile.css'
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import ButtonComponent from "../../home/buttonComponent";
import { useNavigate } from "react-router-dom";

const MyProfile = (props) => {

  const userData = useSelector((state) => (state.profile.user));
  const navigate = useNavigate();

  return (
    <div className="userProfile_wrapper">
      <div className="userProfile">
          <h1>My Profile</h1>
          <div className="userProfile_section1">
              <div>
                  <img src={userData.image} alt={`${userData.firstName}`}></img>
                  <div>
                      <h4>{`${userData.firstName} ${userData.lastName}`}</h4>
                      <p>{userData.email}</p>
                  </div>
              </div>
              <div className="userProfile_Edit" onClick={()=> navigate("/dashboard/setting")}>
                  <ButtonComponent active={true}><div>
                      Edit
                      <FaRegEdit></FaRegEdit>
                  </div></ButtonComponent>
              </div>
          </div>

          <div className="userProfile_section2">
              <div>
                  <h4>About</h4>
                  <div className="userProfile_Edit" onClick={()=> navigate("/dashboard/setting")}>
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
              <div >
                  <h4>Personal Details</h4>
                  <div className="userProfile_Edit" onClick={()=> navigate("/dashboard/setting")}>
                        <ButtonComponent active={true}><div>
                            Edit
                            <FaRegEdit></FaRegEdit>
                        </div></ButtonComponent>
                    </div>
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
                          <h4>{userData.phoneNumber ? userData.phoneNumber : "Add Contact Number"}</h4>
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
  )
};

export default MyProfile;
