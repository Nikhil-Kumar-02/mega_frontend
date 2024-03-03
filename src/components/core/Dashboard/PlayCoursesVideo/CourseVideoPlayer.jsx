import React from "react";
import './CourseVideoPlayer.css';

const CourseVideoPlayer = ({video}) => {
  return (
    <div className="CourseVideoPlayer_wrapper">
      <video src={video} controls ></video>
    </div>
  )
};

export default CourseVideoPlayer;
