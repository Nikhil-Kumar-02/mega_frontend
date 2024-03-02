import React, { useState } from "react"
import './PlayCourseSideBar.css';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import CourseVideoPlayer from "./CourseVideoPlayer";

const PlayCourseSideBar = ({courseDetails}) => {

  const [collaspeSidebar , setCollaspeSidebar] = useState(false);
  const [openSubSection , setOpenSubSection] = useState(null);
  const [currentVideo , setCurrentVideo] = useState(courseDetails?.courseContent[0]?.subSection[0]?.videoUrl);

  

  console.log("the course details in side bar " , courseDetails);
  console.log("int the side bar " , currentVideo , courseDetails?.courseContent[0]?.subSection[0]?.videoUrl);


  function handleSubSectionAccordian(id){
    if(id === openSubSection){
      setOpenSubSection(null);
    }
    else{
      setOpenSubSection(id);
    }
  }

  return (
  <>
    <div className="PlayCourseSideBar_wrapper">
    {
      collaspeSidebar ? 
        (<div className="PlayCourseSideBar_close"
          onClick={() => {
            console.log("clicked");
            setCollaspeSidebar((prev) => !prev);
          }}>
          <FaBars size={20}></FaBars>
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
                  <div className="PlayCourseSideBar_SubSection" onClick={(e) => {
                    e.stopPropagation()
                    setCurrentVideo(subSection?.videoUrl)
                    }}>
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

    <CourseVideoPlayer video={currentVideo}></CourseVideoPlayer>
  </>
    
  )
};

export default PlayCourseSideBar;