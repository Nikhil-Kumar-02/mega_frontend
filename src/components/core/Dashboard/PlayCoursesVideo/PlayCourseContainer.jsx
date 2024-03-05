import React, { useEffect, useState } from "react";
import './PlayCourseContainer.css';
import PlayCourseSideBar from "./PlayCourseSideBar";
import { useParams } from "react-router-dom";
import { getcompleteCourseDetailsFromBackend } from "../../../../services/operations/course";
import RatingModal from "./RatingModal";
import { useSelector } from "react-redux";
import { markSubsectionFromBackend } from "../../../../services/operations/ratingAndReview";

const PlayCourseContainer = (props) => {

  const params = useParams();

  const [courseDetails , setCourseDetails] = useState(false);
  const [ratingModal , setRatingModal] = useState(false);
  const [seenLectures , setSeenLectures] = useState(null);

  console.log("the seen lectures data in play course container : " , seenLectures);

  const token = useSelector((state) => state.auth.token);

  useEffect(()=>{
    (async () => {
      const result = await getcompleteCourseDetailsFromBackend(params.courseId);
      setCourseDetails(result);
      const alreadySeenLectures = await markSubsectionFromBackend(token , {courseId : params.courseId});
      // console.log('alreadySeenLectures' , alreadySeenLectures);
      setSeenLectures(alreadySeenLectures?.data?.dataFound?.completedVideos);
    })();
  } , [params.courseId]);

  
  return (
    <div className="PlayCourseContainer_wrapper">
    {
      courseDetails && <PlayCourseSideBar setRatingModal={setRatingModal} courseDetails={courseDetails}
      seenLectures={seenLectures} setSeenLectures={setSeenLectures}></PlayCourseSideBar>
    }
    {
      ratingModal && <RatingModal setRatingModal={setRatingModal} courseId={params.courseId}></RatingModal>
    }
    </div>
  )
};

export default PlayCourseContainer;
