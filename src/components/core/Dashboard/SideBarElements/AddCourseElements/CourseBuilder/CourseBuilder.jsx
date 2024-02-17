import React, { useRef, useState } from "react"
import './CourseBuilder.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import ButtonComponent from '../../../../home/buttonComponent';
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {setStep} from '../../../../../../reducers/slices/courseSlice';
import CourseSection from "./CourseSection";
import { createSectionBackendRequest, deleteSectionBackendRequest ,updateSectionBackendRequest } from "../../../../../../services/operations/course";

const CourseBuilder = (props) => {
  
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const course = useSelector((state) => state.course.course);
  const token = useSelector((state) => state.auth.token);
  
  const [courseData , setCourseData] = useState([]);
  const [sectionName , setSectionName] = useState(null);
  const [editName , setEditName] = useState(false);

  function deleteHandler(id){

    dispatch(deleteSectionBackendRequest({courseId:course._id , sectionId:id} , token));

    setCourseData((prevData) => (
      prevData.filter((section) =>( section.id !== id))
    ))

  }

  async function handleAddSection(e){
    const value =inputRef.current.value;

    if((e.key === "Enter" || e?._reactName === "onClick" || e.target?.className ===   "courseBuilder_createSection") && value?.length>0){
      
      dispatch(createSectionBackendRequest({sectionName:value , courseId : course._id} , token))
      .then((result) => {

        setCourseData((prev) => (
          [...prev , {id : result?.slice(-1)[0]?._id , sectionName: value}]
        ));
  
        inputRef.current.value = "";
        setSectionName(null);

      })


      // setCourseData((prev) => (
      //   [...prev , {id : 0 , sectionName: value}]
      // ));

      // inputRef.current.value = "";
      // setSectionName(null);

    }
  }

  function nameEditSetupHandler(data){
    setEditName({index:data.index , id:data.id});
    setSectionName(data.name);
  }

  function editSectionName(){
    if(sectionName?.length>0){

      dispatch(updateSectionBackendRequest({sectionName:sectionName , sectionId:editName.id} , token));

      const updatedCourseData = [...courseData];
      updatedCourseData[editName.index] = {...updatedCourseData[editName.index] , sectionName : sectionName};
      setCourseData(updatedCourseData);
      setEditName(false);
      setSectionName("");

    }
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
