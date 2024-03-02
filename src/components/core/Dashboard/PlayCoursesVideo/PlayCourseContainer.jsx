import React, { useEffect, useState } from "react";
import './PlayCourseContainer.css';
import PlayCourseSideBar from "./PlayCourseSideBar";
import { useParams } from "react-router-dom";
import { getcompleteCourseDetailsFromBackend } from "../../../../services/operations/course";

const PlayCourseContainer = (props) => {

  const params = useParams();

  const [courseDetails , setCourseDetails] = useState(null);

  useEffect(()=>{
    (async () => {
      const result = await getcompleteCourseDetailsFromBackend(params.courseId);
      setCourseDetails(result);
    })();
  } , [params.courseId]);

  
  return (
    <div className="PlayCourseContainer_wrapper">
    {
      courseDetails && <PlayCourseSideBar courseDetails={courseDetails}></PlayCourseSideBar>
    }
    </div>
  )
};

export default PlayCourseContainer;
