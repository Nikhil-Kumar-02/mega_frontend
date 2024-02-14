import React, { useRef, useState } from "react"
import './CourseBuilder.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import ButtonComponent from '../../../../home/buttonComponent';
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import {setStep} from '../../../../../../reducers/slices/courseSlice';
import CourseSection from "./CourseSection";


const CourseBuilder = (props) => {

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [courseData , setCourseData] = useState([]);
  const [sectionName , setSectionName] = useState(null);
  const [editName , setEditName] = useState(false);

  function deleteHandler(id){
    setCourseData((prevData) => (
      prevData.filter((sec) => {return sec.id !== id})
    ))
  }

  function handleAddSection(e){
    const value =inputRef.current.value;
    if((e.key === "Enter" || e?._reactName === "onClick" || e.target?.className ===   "courseBuilder_createSection") && value?.length>0){
      const uuid = Date.now();
      setCourseData((prev) => (
        [...prev , {id : uuid , title : value}]
      ));
      inputRef.current.value = "";
      setSectionName(null);
    }
  }

  function nameEditSetupHandler(data){
    console.log('the editable data : ', data);
    setEditName(data.index+1);
    //plus one because when trying to update 0 th index it was reading it as false
    setSectionName(data.name);
  }

  function editSectionName(){
    const updatedCourseData = [...courseData];
    updatedCourseData[editName-1] = {...updatedCourseData[editName-1] , title : sectionName};
    setCourseData(updatedCourseData);
    setEditName(false);
    setSectionName("");
  }

  

  return (
    <div className="courseBuilder_wrapper">
      <div>
        <h1>Course Builder</h1>

        <div className={courseData?.length>0 ? "courseBuilder_section_container" : ""}>
        {
          courseData && courseData?.length>0 && courseData.map((eachSection , index) => (
            <CourseSection key={eachSection.id} eachSection={eachSection} deleteHandler={deleteHandler} nameEditSetupHandler={nameEditSetupHandler} index={index}></CourseSection>
          ))
        }
        </div>

        <div className="courseBuilder_input_feild" >
          <input type="text" placeholder="Add a section to build your course" onKeyDown={editName ? null : handleAddSection} ref={inputRef} value={sectionName} onChange={(e)=>setSectionName(e.target.value)}></input>
        </div>

        {
          editName ? <div className="courseBuilder_createSection" onClick={editSectionName}>Save</div> : 
          <div className="courseBuilder_createSection" onClick={handleAddSection}>
            <IoMdAddCircleOutline color="yellow"></IoMdAddCircleOutline>Create Section
          </div>
        }

      </div>

      <div className="courseBuilder_button_container">
        <div onClick={()=>dispatch(setStep(1))}>
          <ButtonComponent active={false}><IoIosArrowBack size={22} style={{paddingRight : "0.5rem"}}></IoIosArrowBack>Back</ButtonComponent>
        </div>
        <div onClick={()=>dispatch(setStep(3))}>
          <ButtonComponent active={true}>Next<FaChevronRight size={15} style={{paddingLeft : "0.5rem"}}></FaChevronRight></ButtonComponent>
        </div>
      </div>

    </div>
  )
};

export default CourseBuilder;
