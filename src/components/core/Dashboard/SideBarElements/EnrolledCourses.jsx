import React, { useEffect, useState } from "react";
import './EnrolledCourses.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../../services/operations/profile";
import { useNavigate } from "react-router-dom";


const EnrolledCourses = (props) => {
    const [userCourses , setUserCourses] = useState(null);
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getEnrolledCourses = async () =>{
        try {
            const courses = await getUserEnrolledCourses(token , dispatch);
            setUserCourses(courses);
        } catch (error) {
            console.log('error while fetching the courses')
        }
    }

    useEffect(() => {
        getEnrolledCourses();
    } , [])

    console.log('the user courses are ', userCourses)

    if(!userCourses){
        return (
            <div className="custom-loader"></div>
        )
    }

  return (
    <div className="enrolled_courses_wrapper">
        {
            !userCourses || userCourses.length===0 ? 
            (
                <>
                <div>
                    <h1>Enrolled Courses</h1>
                </div>
                <br></br>
                <h2>You have not enrolled in any Courses</h2>
                </>
            )
            : 
            (
                <>
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
                                <div className="eachCourse_wrapper" onClick={()=>navigate(`/view-course/${eachCourse._id}/${eachCourse?.courseContent[0]?._id}/${eachCourse?.courseContent[0]?.subSection[0]?._id}`)}>

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
                </>
            )
        }
        
    </div>
  )
};

export default EnrolledCourses;
