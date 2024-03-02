import React from "react";
import './CourseVideoPlayer.css';

const CourseVideoPlayer = ({video}) => {
  console.log("the video is : " , video);
  return (
    <div className="CourseVideoPlayer_wrapper">
      <video src={video} width="100%" height="90%" controls >
     </video>
    </div>
  )
};

export default CourseVideoPlayer;
