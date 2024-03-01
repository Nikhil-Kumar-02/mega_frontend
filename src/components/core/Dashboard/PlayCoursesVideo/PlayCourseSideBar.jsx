import React, { useEffect, useState } from "react"
import './PlayCourseSideBar.css';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getcompleteCourseDetailsFromBackend } from "../../../../services/operations/course";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const PlayCourseSideBar = (props) => {

  const params = useParams();
  console.log("the params are : " , params);

  const [courseDetails , setCourseDetails] = useState(null);
  const [collaspeSidebar , setCollaspeSidebar] = useState(false);
  const [openSubSection , setOpenSubSection] = useState(null);

  useEffect(()=>{
    (async () => {
      const result = await getcompleteCourseDetailsFromBackend(params.courseId);
      setCourseDetails(result);
    })();
  } , []);

  console.log("the course details are : " , courseDetails);

  function handleSubSectionAccordian(id){
    if(id == openSubSection){
      setOpenSubSection(null);
    }
    else{
      setOpenSubSection(id);
    }
  }

  return (
    <div className="PlayCourseSideBar_wrapper">
    {
      collaspeSidebar ? 
        (<div className="PlayCourseSideBar_close"
          onClick={() => {
            console.log("clicked");
            setCollaspeSidebar((prev) => !prev);
          }}>
          <FaBars size={30}></FaBars>
        </div>) : (
        <div className="PlayCourseSideBar_Open">
          <div>
            <div className="PlayCourseSideBar_arrow" 
            onClick={() => {
              console.log("clicked");
              setCollaspeSidebar((prev) => !prev);
            }}>
              <FaCircleArrowLeft size={30}></FaCircleArrowLeft>
            </div>
            <button>Add Review</button>
        </div>

        <div>
          <p>My Course</p>
          <p> lec seen / {(()=>{
            let totalLectures = 0;
            courseDetails?.courseContent.forEach((section) => {
              totalLectures += parseInt(section?.subSection?.length)
            })
            return totalLectures;
          })()}</p>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <div className="PlayCourseSideBar_Section_SubSection">
        {
          courseDetails?.courseContent.map((section) => (
            <div onClick={()=>{handleSubSectionAccordian(section._id)}}className="PlayCourseSideBar_Section">
              <div>
                {section?.sectionName}
                { openSubSection === section._id ? <IoMdArrowDropup size={20}/> : <IoMdArrowDropdown size={20}/>}
              </div>
              {
                openSubSection === section._id && section?.subSection?.map((subSection) => (
                  <div className="PlayCourseSideBar_SubSection" onClick={(e) => {e.stopPropagation()}}>
                    <FaVideo></FaVideo>
                    {subSection?. title}
                  </div>
                ))
              }
            </div>
          ))
        }
        </div>
      </div>
      )
    }
    </div>
  )
};

export default PlayCourseSideBar;
