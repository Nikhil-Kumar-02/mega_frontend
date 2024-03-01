import React from "react";
import './PlayCourseContainer.css';
import CourseVideoPlayer from "./CourseVideoPlayer";
import PlayCourseSideBar from "./PlayCourseSideBar";


const PlayCourseContainer = (props) => {
  
  return (
    <div className="PlayCourseContainer_wrapper">
      <PlayCourseSideBar></PlayCourseSideBar>
      <CourseVideoPlayer></CourseVideoPlayer>
    </div>
  )
};

export default PlayCourseContainer;
