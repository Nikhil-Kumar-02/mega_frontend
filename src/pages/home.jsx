import React from "react"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'
import HilightedText from "../components/core/home/hilightedText";
import ButtonComponent from "../components/core/home/buttonComponent";


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
            <ButtonComponent text={"Learn More"} linkTo={"signUp"} active={true}></ButtonComponent>
            <ButtonComponent text={"Book a Demo"} linkTo={"logIn"} active={false}></ButtonComponent>
            </div>

        </div>
    {/**section 2 white background */}

    {/**section 3 black background */}

    {/**section 4 footer */}

    </div>
)
};

export default Home;
