import React, { useEffect, useState } from "react";
import './EnrolledCourses.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../../services/operations/profile";


const EnrolledCourses = (props) => {
    const [userCourses , setUserCourses] = useState([]);
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);

    useEffect(() => {
        console.log("called userenrolled courses to the backend !")
        dispatch(getUserEnrolledCourses(setUserCourses , token));
    } , [])

    if(!userCourses){
        return (
            <div className="custom-loader"></div>
        )
    }

  return (
    <div className="enrolled_courses_wrapper">
        <div>
            <h1>Enrolled Courses</h1>
        </div>

        <div className="all_available_courses_wrapper">
            <div>
                <div>Course Name</div>
                <div>Duration</div>
                <div>Progress</div>
            </div>

            {
                userCourses.map((eachCourse) => {
                    return (
                        <div className="eachCourse_wrapper">

                            <div>
                                <div><img src={eachCourse?.thumbnail} height={40}></img></div>
                                <div>
                                    <div>{eachCourse?.courseName}</div>
                                    <div>{eachCourse?.courseDescription}</div>
                                </div>
                            </div>

                            <div>2 hr 45 min</div>

                            <div>
                                <div>
                                    <div>Progress</div>
                                    <div>Progress bar</div>
                                </div>
                                <div> ... </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
};

export default EnrolledCourses;
