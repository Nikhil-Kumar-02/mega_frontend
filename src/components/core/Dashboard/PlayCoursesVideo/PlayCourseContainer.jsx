import React from "react";
import './PlayCourseContainer.css';
import {useSelector} from 'react-redux';
import CourseVideoPlayer from "./CourseVideoPlayer";
import PlayCourseSideBar from "./PlayCourseSideBar";


const PlayCourseContainer = (props) => {
  const course = useSelector((state) => state.course.course);
  console.log("the course is : " , course);
  return (
    <div className="PlayCourseContainer_wrapper">
      <PlayCourseSideBar></PlayCourseSideBar>
      <CourseVideoPlayer></CourseVideoPlayer>
    </div>
  )
};

export default PlayCourseContainer;
