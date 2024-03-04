import React, { useState } from "react"
import './PlayCourseSideBar.css';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import CourseVideoPlayer from "./CourseVideoPlayer";

const PlayCourseSideBar = ({courseDetails , setRatingModal}) => {

  const [collaspeSidebar , setCollaspeSidebar] = useState(false);
  const [openSubSection , setOpenSubSection] = useState(null);
  const [currentVideo , setCurrentVideo] = useState({cc : 0 , ss : 0});

  function handleSubSectionAccordian(id){
    if(id === openSubSection){
      setOpenSubSection(null);
    }
    else{
      setOpenSubSection(id);
    }
  }

  function nextVideoHandler(offset){
    //now we have to play next video
    //if in the currect section more subsection is present then play that
    //else move to other section and play the first subsection
    const currSec = currentVideo.cc;
    const currSubSec = currentVideo.ss;
    console.log("the course is : " , courseDetails);
    console.log(currentVideo);

    if(courseDetails?.courseContent[currSec]?.subSection?.length > currSubSec+offset){
      setCurrentVideo((prev) => {
        let data = {...prev};
        data.ss = currSubSec+offset;
        return data;
      })
    }
    else{
      setCurrentVideo((prev) => {
        let data = {...prev};
        data.cc = currSec+1;
        data.ss = 0;
        return data;
      })
    }
  }

  // console.log("the current video is : " , currentVideo);

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
            <button onClick={()=>{
              setRatingModal(true)
            }}>Add Review</button>
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
          courseDetails?.courseContent.map((section , secIdx) => (
            <div onClick={()=>{handleSubSectionAccordian(section._id)}}className="PlayCourseSideBar_Section">
              <div>
                <span>{section?.sectionName}</span>
                { openSubSection === section._id ? <IoMdArrowDropup size={20}/> : <IoMdArrowDropdown size={20}/>}
              </div>
              {
                openSubSection === section._id && section?.subSection?.map((subSection , subSecIdx) => (
                  <div className={`PlayCourseSideBar_SubSection ${secIdx===currentVideo.cc&&subSecIdx===currentVideo.ss ? "CurrentPlayingVideo" : ""}`} onClick={(e) => {
                    e.stopPropagation()
                    setCurrentVideo({cc:secIdx , ss:subSecIdx});
                    }}>
                    <span>
                      <FaVideo size={15}></FaVideo>
                      <span>{subSection?.title}</span>
                    </span>
                    <input type="checkBox" onClick={(e) => {e.stopPropagation()}} checked></input>
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
    <CourseVideoPlayer video={courseDetails?.courseContent[currentVideo.cc]?.subSection[currentVideo.ss]?.videoUrl} nextVideoHandler={nextVideoHandler}></CourseVideoPlayer>
  </>
    
  )
};

export default PlayCourseSideBar;