import React, { useState } from "react";
import './CourseVideoPlayer.css';
import { markSubsectionFromBackend } from "../../../../services/operations/ratingAndReview";
import { useSelector } from "react-redux";

const CourseVideoPlayer = ({video , nextVideoHandler , courseId , subsectionId , setSeenLectures , seenLectures}) => {

  const [videoEndFunc , setVideoEndFunc] = useState(false);

  function videoEndedHandler(){
    setVideoEndFunc(true);
  }

  const token = useSelector((state)=>state.auth.token);

  async function markSubsectionHandler(){
    const result = await markSubsectionFromBackend(token,{courseId , subsectionId});
    setSeenLectures(result);
  }


  return (
    <div className="CourseVideoPlayer_wrapper">
      {
        video ? (<video src={video} controls onEnded={()=>{videoEndedHandler()}} ></video>)
        :
        (<div className="courseVideoPlayer_completed_gif"><iframe src="https://giphy.com/embed/h2ORVK02QhsBrGMYaU" height="500rem" width="500rem" allowFullScreen></iframe></div>)
      }
      {
        videoEndFunc && <div className="video_end_functionalities">
          {
            seenLectures?.includes(subsectionId) ? <div></div> : 
            <button onClick={() => {
            markSubsectionHandler()
            }}>Mark as Completed</button>
          }
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
