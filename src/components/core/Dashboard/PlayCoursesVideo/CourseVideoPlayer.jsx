import React, { useState } from "react";
import './CourseVideoPlayer.css';

const CourseVideoPlayer = ({video , nextVideoHandler}) => {

  const [videoEndFunc , setVideoEndFunc] = useState(false);

  function videoEndedHandler(){
    setVideoEndFunc(true);
  }

  console.log("the current video url is :" , video);


  return (
    <div className="CourseVideoPlayer_wrapper">
      {
        video ? (<video src={video} controls onEnded={()=>{videoEndedHandler()}} ></video>)
        :
        (<div className="courseVideoPlayer_completed_gif"><iframe src="https://giphy.com/embed/h2ORVK02QhsBrGMYaU" height="500rem" width="500rem" allowFullScreen></iframe></div>)
      }
      {
        videoEndFunc && <div className="video_end_functionalities">
          <button>Mark as Completed</button>
          <button  onClick={()=>{
            setVideoEndFunc(false);
            nextVideoHandler(0);
          }} >Replay</button>
          <button onClick={()=>{
            setVideoEndFunc(false);
            nextVideoHandler(1)
          }}>Next</button>
        </div>
      }
    </div>
  )
};

export default CourseVideoPlayer;
