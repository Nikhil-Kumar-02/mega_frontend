import React from "react"
import './Settings.css';
import { GrUpload } from "react-icons/gr";
import ButtonComponent from "../../home/buttonComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PasswordInputComponent from "../../../common/PasswordInputComponent";
import { RiDeleteBin6Line } from "react-icons/ri";

const Settings = (props) => {

  const userData = useSelector((state) => (state.profile.user));
  const navigate = useNavigate();

  return (
    <div className="setting_wrapper">

      <div>
        <h1>Edit Profile</h1>
      </div>

      <div>
        <img src={userData.image} alt={`${userData.firstName}`} height={100}></img>
        <div>
          <h4>Change Profile Picture</h4>
          <div>

            <div className="userProfile_Edit" onClick={()=> navigate("/dashboard/setting")}>
              <ButtonComponent active={true}>
              <div>
                Select
              </div></ButtonComponent>
            </div>

            <div className="userProfile_Edit">
              <ButtonComponent active={true}>
              <div>
                Upload
                <GrUpload></GrUpload>
              </div></ButtonComponent>
            </div>

          </div>
        </div>
      </div>

      <div>
        <h4>Profile Information</h4>

        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder={userData.firstName ?? "First Name"} value={userData.firstName}></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder={userData.lastName ?? "Last Name"} value={userData.lastName}></input>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input type="date" placeholder={userData.firstName ?? "Date Of Birth"} value={userData.firstName}></input>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input type="text" placeholder={userData.gender ?? "Gender"} value={userData.gender}></input>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="firstName">Contact Number</label>
            <input type="text" placeholder={userData.phoneNumber ?? "Enter Contact Number"} value={userData.phoneNumber}></input>
          </div>
          <div>
            <label htmlFor="about">About</label>
            <input type="text" placeholder={userData.about ?? "About"} value={userData.about}></input>
          </div>
        </div>

        <div>
          <div><ButtonComponent active={false}>Cancel</ButtonComponent></div>
          <div><ButtonComponent active={true}>Save</ButtonComponent></div>
        </div>
      </div>


      <div>

        <h4>Password</h4>
        <div>
          <div>
            <PasswordInputComponent placeholder={"Enter Current Password"} title={"Current Password"}></PasswordInputComponent>
          </div>
          <div>
            <PasswordInputComponent placeholder={"Enter New Password"} title={"Enter New Password"}></PasswordInputComponent>
          </div>
        </div>

        <div>
          <div><ButtonComponent active={false}>Cancel</ButtonComponent></div>
          <div><ButtonComponent active={true}>Update</ButtonComponent></div>
        </div>

      </div>

      <div>
        <div><RiDeleteBin6Line color="#EF476F"></RiDeleteBin6Line></div>
        <div>
          <h2>Delete Account</h2>
          <p>Would you like to delete account ?<br></br>
          This account contain Paid Courses.Deleting your account will remove all the content associated with it.</p>
          <p>I want to delete my account.</p>
        </div>
      </div>


    </div>
  )
};

export default Settings;
