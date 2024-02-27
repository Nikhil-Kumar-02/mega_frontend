import React from "react"
import './RenderCatelogCourses.css';
import { useNavigate } from "react-router-dom";

const RenderCatelogCourses = (props) => {
  const {reviewAndRatings   , courseName,  price, thumbnail , _id} = props.eachCourse;
  const navigate = useNavigate();

  return (
    <div className="catelog_each_course_wrapper" onClick={() => {navigate(`/course/${_id}`)}}>
      <div><img src={thumbnail} height={100}></img></div>
      <div>course name : {courseName}</div>
      <div>each course review and rating {reviewAndRatings}</div>
      <div>course price{price}</div>
    </div>
  )
};

export default RenderCatelogCourses;
