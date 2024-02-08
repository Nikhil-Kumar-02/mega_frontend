import React from "react"
import './CourseBuilder.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import ButtonComponent from '../../../../home/buttonComponent';
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {setStep} from '../../../../../../reducers/slices/courseSlice';

const CourseBuilder = (props) => {

  const currStep = useSelector((state) => state.course.step);
  const dispatch = useDispatch();

  function toggleStep(val){
    dispatch(setStep(currStep+val));
  }

  return (
    <div className="courseBuilder_wrapper">
      <div>
        <h1>Course Builder</h1>
        <div className="courseBuilder_input_feild">
          <input placeholder="Add a section to build your course"></input>
        </div>
        <div className="courseBuilder_createSection">
          <IoMdAddCircleOutline color="yellow"></IoMdAddCircleOutline>Create Section
        </div>
      </div>
      <div className="courseBuilder_button_container">
        <div onClick={()=>toggleStep(-1)}>
          <ButtonComponent active={false}><IoIosArrowBack size={22} style={{paddingRight : "0.5rem"}}></IoIosArrowBack>Back</ButtonComponent>
        </div>
        <div onClick={()=>toggleStep(1)}>
          <ButtonComponent active={true}>Next<FaChevronRight size={15} style={{paddingLeft : "0.5rem"}}></FaChevronRight></ButtonComponent>
        </div>
      </div>
    </div>
  )
};

export default CourseBuilder;
