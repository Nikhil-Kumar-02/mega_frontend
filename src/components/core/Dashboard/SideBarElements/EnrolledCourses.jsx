import React, { useEffect, useState } from "react";
import './EnrolledCourses.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../../services/operations/profile";
import { useNavigate } from "react-router-dom";
import { markSubsectionFromBackend } from "../../../../services/operations/ratingAndReview";


const EnrolledCourses = (props) => {
    const [userCourses , setUserCourses] = useState(null);
    const [seenLectures , setSeenLectures] = useState(null);

    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getEnrolledCourses = async () =>{
        try {
            const courses = await getUserEnrolledCourses(token , dispatch);
            console.log("the recieved user courses are : " , courses);
            setUserCourses(courses);

            const alreadySeenLectures = await markSubsectionFromBackend(token);
            setSeenLectures(alreadySeenLectures?.data?.allProgress);

        } catch (error) {
            console.log('error while fetching the courses')
        }
    }

    useEffect(() => {
        getEnrolledCourses();
    } , [])


    if(!userCourses){
        return (
            <div className="custom-loader"></div>
        )
    }

    function totalSeenLecturesHandler(id){
        let result = 0;
        seenLectures?.map((lecture) => {
            if(lecture.courseId === id){
                result = lecture.completedVideos.length;
            }
        })
        return result;
    }

    function totalCourseLectures(id){
        let result = 0;
        userCourses?.map((eachCourse) => {
            if(eachCourse._id === id){
                eachCourse?.courseContent.map((section) => {
                    result += parseInt(section.subSection.length)
                })
            }
        })
        return result;
    }

    function coursePercentage(id){
        let seenLectures = totalSeenLecturesHandler(id)
        let totalLectures = totalCourseLectures(id)

        if(totalLectures === 0){
            return 0;
        }

        let completePercentage = seenLectures/totalLectures
        return parseInt(completePercentage*100);
    }

    console.log("the user progress is : " , seenLectures);

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
                                <div className="eachCourse_wrapper" onClick={()=>navigate(`/view-course/${eachCourse._id}`)}>

                                    <div>
                                        <div><img src={eachCourse?.thumbnail} height={40}></img></div>
                                        <div>
                                            <div>{eachCourse?.courseName}</div>
                                            <div>{eachCourse?.courseDescription}</div>
                                        </div>
                                    </div>

                                    <div>
                                    {
                                        (() => {
                                            let totalTime = 0;
                                            eachCourse?.courseContent?.map((section) => {
                                                let sectionTime = 0;
                                                section?.subSection?.map((subSection) => {
                                                    sectionTime += parseFloat(subSection?.timeDuration);
                                                })
                                                totalTime += sectionTime;
                                            })
                                            return totalTime + "minutes";
                                        })()
                                    }
                                    </div>

                                    <div>
                                        <div className="Enrolled_course_progress">
                                            <div>Progress % : {
                                                coursePercentage(eachCourse._id)
                                            }</div>
                                            <div><span style={{backgroundColor : 'green', width : `${coursePercentage(eachCourse._id)}%`}}></span><span></span></div>
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
