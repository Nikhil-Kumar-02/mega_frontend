import React from "react"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'
import HilightedText from "../components/core/home/hilightedText";
import ButtonComponent from "../components/core/home/buttonComponent";
import autoPlayVideo from '../assets/production_id_3969453 (2160p).mp4'

const Home = (props) => {
return (
    <div className="homeWrapper">
    {/**section 1 black background */}
        <div className="section1">
            <Link to={"/signup"} className="becomeInstructorButton">
                <div >
                    <div>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>
            <h2 className="heading">Empower Your Future with 
                <HilightedText text={" Coding Skills"}></HilightedText>
            </h2>
            <div className="section1Description">With our online coding courses, you can learn at your own pace, from anywhere around the world, and get access to a wealth of resourses, including hands-on-project, quizzes, and personalized feedback from Instructors.
            </div>

            <div className="buttonContainer">
            <ButtonComponent linkTo={"signUp"} active={true}>Learn More</ButtonComponent>
            <ButtonComponent linkTo={"logIn"} active={false}>Book a Demo</ButtonComponent>
            </div>

            <div>
                <video muted autoPlay loop className="video">
                    <source ></source>
                </video>
            </div>

        </div>
    {/**section 2 white background */}

    {/**section 3 black background */}

    {/**section 4 footer */}

    </div>
)
};

export default Home;
