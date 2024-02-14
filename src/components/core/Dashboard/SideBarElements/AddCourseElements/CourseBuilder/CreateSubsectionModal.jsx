import React, { useState } from "react"
import './CreateSubsectionModal.css';
import { RxCross2 } from "react-icons/rx";
import LectureUpload from "../../../../../common/LectureUpload";

const CreateSubsectionModal = ({setViewSubsectionModal}) => {

  function submitHandler(e){
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <form className="CreateSubsectionModal_wrapper" onSubmit={submitHandler}>
      <div>
        <span className="cancel_create_subsection_modal" onClick={()=>setViewSubsectionModal(false)}>
          <RxCross2></RxCross2>
        </span>
        <div>Adding Lecture</div>
        <div>
          <p>Lecture Video <sup>*</sup></p>
          <LectureUpload></LectureUpload>
        </div>
        <div>
          <p>Lecture Title<sup>*</sup></p>
          <input type="text" placeholder="Enter Title"></input>
        </div>
        <div>
          <p>Lecture Description<sup>*</sup></p>
          <textarea type="text" placeholder="Enter Description"></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  )
};

export default CreateSubsectionModal;
