import React from "react"
import './RenderCatelogCourses.css';

const RenderCatelogCourses = (props) => {
  const {reviewAndRatings   , courseName,  price, thumbnail} = props.eachCourse;
  return (
    <div className="catelog_each_course_wrapper">
      <div><img src={thumbnail} height={100}></img></div>
      <div>course name : {courseName}</div>
      <div>each course review and rating {reviewAndRatings}</div>
      <div>course price{price}</div>
    </div>
  )
};

export default RenderCatelogCourses;
