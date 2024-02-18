import React, { useEffect } from "react"
import './CreateSubsectionModal.css';
import { RxCross2 } from "react-icons/rx";
import LectureUpload from "../../../../../common/LectureUpload";
import { useForm } from "react-hook-form";
import { createSubSectionBackendRequest, updateSubSectionBackendRequest } from "../../../../../../services/operations/course";
import { useSelector } from "react-redux";


const CreateSubsectionModal = ({setSubsectionModal , setSubSectionData , data , 
    add = false , edit = false , view = false}) => {

  const token = useSelector((state) => state.auth.token);
  const {register , getValues , setValue , formState : {errors} , handleSubmit} = useForm();

  console.log("add" , add);
  console.log("edit" , edit);
  console.log("view" , view);

  useEffect(()=> {
    if(edit || view){
      setValue("videoFile" , data.videoFile);
      setValue("title" , data.title);
      setValue("description" , data.description);
    }
  } , [])

  async function submitHandler(){
    // e.preventDefault();
    if(view){
      return;
    }
    if(add || edit){
      console.log("form submitted" , getValues());
      const currentValues = getValues();
      const formData = new FormData();
      
      if(add){
        formData.append("videoFile" , currentValues.videoFile);
        formData.append("title" , currentValues.title);
        formData.append("description" , currentValues.description);
        formData.append('sectionId' , data.id);
        await createSubSectionBackendRequest(formData , token)
        .then((result) => {
          const uuid = result.splice(-1)[0]._id;
          setSubSectionData((prev) => [...prev , {id : uuid , ...currentValues}]);
          setSubsectionModal(null);
        })
      }
      if(edit){
        if(data.title !== currentValues.title){
          formData.append("title" , currentValues.title);
        }
        if(data.description !== currentValues.description){
          formData.append("description" , currentValues.description);
        }
        if(data.videoFile !== currentValues.videoFile){
          formData.append("videoFile" , currentValues.videoFile);
        }
        formData.append('subsectionId' , data.id);
        await updateSubSectionBackendRequest(formData , token)
        const uuid = data.id;
        setSubSectionData((prev) => (
          prev.map((eachSubSection) => (
            eachSubSection.id !== uuid ? eachSubSection : {id:uuid , ...currentValues}
          ))
        ));
        setSubsectionModal(null);
      }
    }

  }


  return (
    <form className="CreateSubsectionModal_wrapper" onSubmit={handleSubmit(submitHandler)}>
      <div>
        <div>
          {add ? "Adding" : edit ? "Editing" : "Viewing"} Lecture
          <span onClick={()=>setSubsectionModal(null)} className="cancel_create_subsection_modal"><RxCross2></RxCross2></span>
        </div>
        <div>
          <p>Lecture Video <sup>*</sup></p>
          <LectureUpload setValue={setValue} attributeName={"videoFile"} viewData={view ? data.videoFile : null} editData={edit ? data.videoFile : null}></LectureUpload>
        </div>
        <div>
          <p>Lecture Title<sup>*</sup></p>
          <input type="text" placeholder="Enter Title" disabled={view} {...register("title" , {required : true})}></input>
          {
            errors.title && <p className="required_error_message">Title is Required</p>
          }
        </div>
        <div>
          <p>Lecture Description<sup>*</sup></p>
          <textarea type="text" placeholder="Enter Description" disabled={view} {...register("description" , {required : true})}></textarea>
          {
            errors.description && <p className="required_error_message">Description is required</p>
          }
        </div>
        <div>
          {
            add ? <button type="submit">Save</button> 
            : edit ? <button type="submit">Save Changes</button> 
            : <div></div>
          }
        </div>
      </div>
    </form>
  )
};

export default CreateSubsectionModal;
