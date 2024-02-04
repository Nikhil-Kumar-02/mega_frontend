import React, { useRef, useState } from "react"
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
  const fileuploadElement = useRef(null);


  const [userFormData , setUserFromData] = useState({firstName:userData?.firstName , lastName:userData?.lastName , dob:userData?.dob , phoneNumber:userData?.phoneNumber , gender:userData?.gender , about:userData?.about});

  const [userCurrentPassword , setUserCurrentPassword] = useState(null);
  const [userNewPassword , setUserNewPassword] = useState(null);


  function fileUploadHandler(){
    // fileuploadElement.current.click();
    console.log('clicked')
  }

  function saveHandler(){
    console.log('the data filled by user is : ' , userFormData);
  }

  function changeHandler(e){
    setUserFromData(prev => ({
      ...prev , 
      [e.target.name] : e.target.value
    }))
  }

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

            <div className="userProfile_Edit" onClick={fileUploadHandler} ref={fileuploadElement}>
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
            <input type="text" placeholder={userFormData.firstName ?? "First Name"} name="firstName" value={userFormData.firstName} onChange={changeHandler}></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder={userFormData.lastName ?? "Last Name"} name="lastName" value={userFormData.lastName} onChange={changeHandler}></input>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input id="dob" type="date" placeholder={userFormData.dob ?? "Date Of Birth"} name="dob" value={userFormData.dob} onChange={changeHandler}></input>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            {/* <input id="gender" type="text" name="gender" placeholder={userFormData.gender ?? "Gender"} value={userFormData.gender} onChange={changeHandler}></input> */}
            <div className="settings_allGender_container">
              <label>
                <input type="radio" value='Male' name='gender' checked={userFormData.gender === "Male"} onChange={changeHandler}></input>
                Male
              </label>
              <label>
                <input type="radio" value='Female' name='gender' checked={userFormData.gender === "Female"} onChange={changeHandler}></input>
                Female
              </label>
              <label>
                <input type="radio" value='Others' name='gender' checked={userFormData.gender === "Others"} onChange={changeHandler}></input>
                Others
              </label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="phoneNumber">Contact Number</label>
            <input id="phoneNumber" type="text" placeholder={userFormData.phoneNumber ?? "Enter Contact Number"} name="phoneNumber" value={userFormData.phoneNumber} onChange={changeHandler}></input>
          </div>
          <div>
            <label htmlFor="about">About</label>
            <input id="about" type="text" placeholder={userFormData.about ?? "About"} name="about" value={userFormData.about} onChange={changeHandler}></input>
          </div>
        </div>

        <div>
          <div onClick={()=> navigate("/dashboard/my-profile")}><ButtonComponent active={false}>Cancel</ButtonComponent></div>
          <div onClick={saveHandler}><ButtonComponent active={true}>Save</ButtonComponent></div>
        </div>

      </div>


      <div>

        <h4>Password</h4>
        <div>
          <div>
            <PasswordInputComponent fetchPassword={setUserCurrentPassword} placeholder={"Enter Current Password"} title={"Current Password"}></PasswordInputComponent>
          </div>
          <div>
            <PasswordInputComponent fetchPassword={setUserNewPassword} placeholder={"Enter New Password"} title={"Enter New Password"}></PasswordInputComponent>
          </div>
        </div>

        <div>
          <div onClick={()=> navigate("/dashboard/my-profile")}><ButtonComponent active={false}>Cancel</ButtonComponent></div>
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
