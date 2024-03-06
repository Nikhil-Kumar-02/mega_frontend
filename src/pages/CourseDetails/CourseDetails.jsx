import React, { useEffect, useState } from "react"
import './CourseDetails.css';
import { useNavigate, useParams } from "react-router-dom";
import { getcompleteCourseDetailsFromBackend } from "../../services/operations/course";
import ButtonComponent from "../../components/core/home/buttonComponent";
import { LiaCertificateSolid } from "react-icons/lia";
import { FcMultipleDevices } from "react-icons/fc";
import { PiCursorFill } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import Footer from "../../components/common/Footer";
import CourseDetailsSection from "./CourseDetailsSection";
import { buyCourse } from "../../services/operations/StudentFeaturesAPI";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCartBackendRequest } from "../../services/operations/cart";

const CourseDetails = (props) => {
    const {courseId} = useParams();
    const [courseDetails , setCourseDetails] = useState(null);
    const [loading , setLoading] = useState(false);
    const [collapseAll , setCollaspeAll] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state)=> state.auth.token);
    const userDetails = useSelector((state) => state.profile.user);

    useEffect(() => {
        const callFunction = async () => {
            setLoading(true);
            const result = await getcompleteCourseDetailsFromBackend(courseId);
            setCourseDetails(result);
            setLoading(false);
        }
        callFunction();
    } , [courseId]);

    if(loading){
        return(
            <div className="custom-loader"></div>
        )
    }

    async function buyCourseClickHandler(){
        //here we are buying individual courses so we will the individual courseid in the array as a 
        //list of all courses we want to buy
        if(token){
            const responseFromServices = await buyCourse(token , [courseId] , userDetails , navigate , dispatch);
            console.log('responseFromServices ' , responseFromServices);
        }
        else{
            //person is not logged in and he is trying to buy the course
            navigate("/logIn");
        }
    }

    function addItemsToCartHandler(id){
        dispatch(addItemsToCartBackendRequest(token , id));
    }


  return (
    <div className="CourseDetails_wrapper">
        {/* section 1 */}
        <div className="CourseDetails_section1">
            <div>
                <h1>{courseDetails?.courseName}</h1>
                <p>{courseDetails?.courseDescription}</p>
                <p>stars , review count and students enrolled count</p>
                <p>Created by : {courseDetails?.instructor?.firstName} {" "} {courseDetails?.instructor?.lastName}</p>
                <p>Created At : {courseDetails?.createdAt.split('T')[0]}</p>
            </div>
            <div>
                <div>
                    <img src={courseDetails?.thumbnail} loading="lazy"></img>
                </div>
                <div>
                    <p style={{fontSize:"1.5rem"}}>$ {courseDetails?.price}</p>
                    <div onClick={()=>{buyCourseClickHandler()}}>
                        <ButtonComponent active={true} linkTo={`/course/${courseId}`}>Buy Now</ButtonComponent>
                    </div>
                    <div onClick={() => {addItemsToCartHandler(courseId)}}>
                        <ButtonComponent active={false} >Add to Cart</ButtonComponent>
                    </div>
                    <p>30 - day Money-Back Guarantee</p>
                    <div>
                        <h4>This course includes : </h4>
                        <div >
                            <p><IoIosTimer></IoIosTimer>8 hour on demand video</p>
                            <p><PiCursorFill></PiCursorFill>Full life time access</p>
                            <p><FcMultipleDevices></FcMultipleDevices>Acces on Mobile and TV</p>
                            <p><LiaCertificateSolid color="dodgerblue" ></LiaCertificateSolid>Certificate of Completion</p>
                        </div>
                    </div>
                </div>
                <div>Share</div>
            </div>
        </div>

        <div className="CourseDetails_section2">
            <h1>What you will Learn</h1>
            <p>{courseDetails?.whatYouWillLearn}</p>
        </div>

        <div className="CourseDetails_section3">
            <h1>Course Content</h1>
            <div>
                <p>{courseDetails?.courseContent.length} sections . {
                    (() => {
                        let totalLectures = 0;
                        courseDetails?.courseContent.forEach((sec) => {
                            totalLectures += parseInt(sec.subSection.length);
                        });
                        return totalLectures;
                    })()
                } lectures . {courseDetails?.totalCourseDuration} min Total Length</p>
                <p onClick={()=>{setCollaspeAll(true)}}>Collapse all sections</p>
            </div>
            {/* <CourseDetailsSection section={courseDetails?.courseContent}></CourseDetailsSection> */}
            <div className="CourseDetailsSection_wrapper">
            {
                courseDetails?.courseContent?.map((eachSection) => (
                    <CourseDetailsSection section={eachSection} collapseAll={collapseAll} setCollaspeAll={setCollaspeAll}></CourseDetailsSection>
                ))
            }
            </div>
        </div>

        <div className="CourseDetails_section4">
            <h2>Author</h2>
            <div>
                <img src={courseDetails?.instructor?.image}></img>
                <p>{courseDetails?.instructor?.firstName} {" "} {courseDetails?.instructor?.lastName}</p>
            </div>
            <div>{courseDetails?.instructor?.additionalDetails?.about}</div>
        </div>

        <div className="CourseDetails_section5">
            <h1>Review from other learners</h1>
            <div>

            </div>
        </div>  

        <div className="footer">
            <Footer></Footer>
        </div>
    </div>
  )
};

export default CourseDetails;
