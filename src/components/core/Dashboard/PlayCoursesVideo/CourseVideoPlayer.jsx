import React, { useState } from "react";
import './CourseVideoPlayer.css';

const CourseVideoPlayer = ({video}) => {

  const [videoEndFunc , setVideoEndFunc] = useState(false);
  function videoEndedHandler(){
    setVideoEndFunc(true);
  }

  return (
    <div className="CourseVideoPlayer_wrapper">
      <video src={video} controls onEnded={()=>{videoEndedHandler()}}></video>
      {
        videoEndFunc && <div className="video_end_functionalities">
          <button>Mark as Completed</button>
          <button>Replay</button>
          <button>Next</button>
        </div>
      }
    </div>
  )
};

export default CourseVideoPlayer;
