import React, { useState } from "react"
import './CreateSubsectionModal.css';
import { RxCross2 } from "react-icons/rx";
import LectureUpload from "../../../../../common/LectureUpload";
import { useForm } from "react-hook-form";

const CreateSubsectionModal = ({setViewSubsectionModal}) => {

  function submitHandler(){
    // e.preventDefault();
    console.log("form submitted" , getValues());
    const currentValues = getValues();
    const formData = new FormData();

    formData.append("videoFile" , currentValues.videoFile);
    formData.append("title" , currentValues.title);
    formData.append("Description" , currentValues.Description);

  }

  const {register , getValues , setValue , formState : {errors} , handleSubmit} = useForm();

  return (
    <form className="CreateSubsectionModal_wrapper" onSubmit={handleSubmit(submitHandler)}>
      <div>
        <div>
          Adding Lecture
          <span onClick={()=>setViewSubsectionModal(false)} className="cancel_create_subsection_modal"><RxCross2></RxCross2></span>
        </div>
        <div>
          <p>Lecture Video <sup>*</sup></p>
          <LectureUpload setValue={setValue} attributeName={"videoFile"}></LectureUpload>
        </div>
        <div>
          <p>Lecture Title<sup>*</sup></p>
          <input type="text" placeholder="Enter Title" {...register("title" , {required : true})}></input>
          {
            errors.title && <p className="required_error_message">Title is Required</p>
          }
        </div>
        <div>
          <p>Lecture Description<sup>*</sup></p>
          <textarea type="text" placeholder="Enter Description" {...register("description" , {required : true})}></textarea>
          {
            errors.description && <p className="required_error_message">Description is required</p>
          }
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  )
};

export default CreateSubsectionModal;
