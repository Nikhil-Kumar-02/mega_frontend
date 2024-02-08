import React from "react"
import './AddCourse.css';
import CourseUploadTips from "./CourseUploadTips";
import CourseBuilder from './CourseBuilder/CourseBuilder'
import { FaCheck } from "react-icons/fa";
import CourseInformation from "./CourseInformation/CourseInformation";
import { useSelector } from "react-redux";
import CoursePublish from './CoursePublish/Coursepublish'

const AddCourse = (props) => {

  const courseSteps = [
    {
      id : 1,
      title : "Course Information"
    },
    {
      id : 2,
      title : "Course Builder"
    },
    {
      id : 3,
      title : "Course Publish"
    }
  ];

  const currStep = useSelector((state)=> state.course.step);

 
  return (
    <div className="addCourse_wrapper">

      <div>
        <div className="three_steps_Container">
          {
            courseSteps.map((step) => (
              <div className="each_step_container">

                <div className={currStep > step.id ? "Yellow_selected_stepNumber" : 
                  currStep === step.id ? "current_stepNumber" : "" }>
                  <div className={currStep >= step.id ? `addCourse_passed_horizontal_linel${step.id}` : `addCourse_horizontal_linel${step.id}`}></div>

                  <div className="Step_Number">{
                    currStep > step.id ? (<FaCheck size={9}></FaCheck>) : step.id
                  }</div>

                  <div className={currStep > step.id ?  `addCourse_passed_horizontal_liner${step.id}` : `addCourse_horizontal_liner${step.id}`}></div>
                </div>

                <div>{step.title}</div>

              </div>
            ))
          }
        </div>
        {
          currStep === 1 && <CourseInformation></CourseInformation>
        }
        {
          currStep === 2 && <CourseBuilder></CourseBuilder>
        }
        {
          currStep === 3 && <CoursePublish></CoursePublish>
        }

      </div>

      <div><CourseUploadTips></CourseUploadTips></div>
    </div>
  )
};

export default AddCourse;
