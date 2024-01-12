import React from "react"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'
import HilightedText from "../components/core/home/hilightedText";
import ButtonComponent from "../components/core/home/buttonComponent";
// import autoPlayVideo from '../assets/production_id_3969453 (2160p).mp4'
import HomePageTextBlock from "../components/core/home/HomePageTextBlock";
import HomepageCodeBlock from '../components/core/home/HomepageCodeBlock';
import HomePageThreeCard from '../components/core/home/HomePageThreeCard'

const Home = (props) => {
return (
    <div className="homeWrapper">
        {/**section 1 black background */}
            
        <Link to={"/signup"} className="becomeInstructorButton">
            <div >
                <div>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>
        </Link>

        <h2 className="Homepage_heading_section1">Empower Your Future with 
            <HilightedText>Coding Skills</HilightedText>
        </h2>

        <div className="section1Description">With our online coding courses, you can learn at your own pace, from anywhere around the world, and get access to a wealth of resourses, including hands-on-project, quizzes, and personalized feedback from Instructors.
        </div>

        <div className="top_two_buttonContainer">
            <ButtonComponent linkTo={"signUp"} active={true}>Learn More</ButtonComponent>
            <ButtonComponent linkTo={"logIn"} active={false}>Book a Demo</ButtonComponent>
        </div>

        <div>
            {/* <video muted autoPlay loop className="video">
                <source src={autoPlayVideo}></source>
            </video> */}
        </div>

        <div className="code_and_text_block">

            <HomePageTextBlock text1={"Unlock your"} hilightedText={"coding potential"} text2={"with our online courses."}>
                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                <div className="HomePageTextBlock_buttonContainer">

                    <ButtonComponent active={true} linkTo={"/signUp"}>
                        <div className="homepage_button_arrow">
                            <div>Try it Yourself</div>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </ButtonComponent>

                    <ButtonComponent active={false} linkTo={"/logIn"}>Learn More</ButtonComponent>

                </div>
            </HomePageTextBlock>  

            <HomepageCodeBlock></HomepageCodeBlock>
        </div>

        <div className="code_and_text_block">

            <HomepageCodeBlock></HomepageCodeBlock>

            <HomePageTextBlock text1={"Start"} hilightedText={"coding in seconds"} text2={""}>
                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.

                <div className="HomePageTextBlock_buttonContainer">

                    <ButtonComponent active={true} linkTo={"/signUp"}>
                        <div className="homepage_button_arrow">
                            <div>Continue Lesson</div>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </ButtonComponent>

                    <ButtonComponent active={false} linkTo={"/logIn"}>Learn More</ButtonComponent>

                </div>

            </HomePageTextBlock>

        </div>

        <h2 className="section1_heading">Unlock the <HilightedText>Power of Code</HilightedText></h2>

        <p className="section1_para">Learn to Build Anything You Can Imagine</p>
            
        <div className="section1_three_card">

            <HomePageThreeCard heading={"Learn HTML"} active={false}>
            This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.
            </HomePageThreeCard>

            <HomePageThreeCard heading={"Learn CSS"} active={true}>
            This course explores advanced topics in HTML5 and CSS3, including
            animations, transitions, and layout techniques
            </HomePageThreeCard>

            <HomePageThreeCard heading={"Responsive Web Design"} active={true}>
            This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes
            </HomePageThreeCard>

        </div>
        {/**section 2 white background */}
            

        {/**section 3 black background */}

        {/**section 4 footer */}

    </div>
)
};

export default Home;
