import React from "react"
import './AddCourse.css';
import CourseUploadTips from "./CourseUploadTips";
import { HiCurrencyRupee } from "react-icons/hi";
import ButtonComponent from '../../../home/buttonComponent';
import { CgAsterisk } from "react-icons/cg";

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

  return (
    <div className="addCourse_wrapper">
      <div>
        <div>
          {
            courseSteps.map((step) => (
              <>
                <div>
                  <div>{step.id}</div>
                  <div>{step.title}</div>
                </div>
                <div className={`addCourse_horizontal_line${step.id}`}></div>
              </>
            ))
          }
        </div>
        <div>
          <form>
            <div>
              <label>Course Title<CgAsterisk size={13}></CgAsterisk></label>
              <input type="text" placeholder="Enter Course Title"></input>
            </div>
            <div>
              <label>Course Short Description<CgAsterisk size={13}></CgAsterisk></label>
              <textarea placeholder="Enter Description"></textarea>
            </div>
            <div>
              <label>Course Price<CgAsterisk size={13}></CgAsterisk></label>
              <input type="text" placeholder={`${<HiCurrencyRupee></HiCurrencyRupee>} Enter Price`}></input>
            </div>
            <div>
              <label>Category<CgAsterisk size={13}></CgAsterisk></label>
              <input type="text" placeholder="Choose a Category"></input>
            </div>
            <div>
              <label>Tags<CgAsterisk size={13}></CgAsterisk></label>
              <input type="text" placeholder="Choose a Tag"></input>
            </div>
            <div>
              <label>Course Thumbnail<CgAsterisk size={13}></CgAsterisk></label>
              <input type="file" placeholder="Drag and Drop or Choose"></input>
            </div>
            <div>
              <label>Benefits of the course<CgAsterisk size={13}></CgAsterisk></label>
              <textarea placeholder="Enter benefits of the course"></textarea>
            </div>
            <div>
              <label>Requirements / Instructions<CgAsterisk size={13}></CgAsterisk></label>
              <textarea placeholder="Enter benefits of the course"></textarea>
            </div>
            <div>
              <ButtonComponent active={true}>Next</ButtonComponent>
            </div>
          </form>
        </div>
      </div>
      <div><CourseUploadTips></CourseUploadTips></div>
    </div>
  )
};

export default AddCourse;
