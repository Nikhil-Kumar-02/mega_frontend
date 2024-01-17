import React from "react"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'
import HilightedText from "../components/core/home/hilightedText";
import ButtonComponent from "../components/core/home/buttonComponent";
// import autoPlayVideo from '../assets/production_id_3969453 (2160p).mp4'
import HomePageTextBlock from "../components/core/home/HomePageTextBlock";
import HomepageCodeBlock from '../components/core/home/HomepageCodeBlock';
import HomePageThreeCard from '../components/core/home/HomePageThreeCard';
import { PiMedalFill } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaGem } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import photo from "../assets/girl.jpg";
import cheat from '../assets/cheat.png';
import instructor from '../assets/instructor.png'
import Footer from "../components/core/home/Footer";
import ToggleCourse from "../components/core/home/ToggleCourse";
import Navbar from "../components/core/home/Navbar";

const Home = (props) => {
return (
    <div className="homeWrapper">
        
        <Navbar></Navbar>

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

            <h1 className="Homepage_heading_section1">Empower Your Future with 
                <HilightedText>Coding Skills</HilightedText>
            </h1>

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

            <ToggleCourse></ToggleCourse>
                
        </div>

        {/**section 2 white background */}
            
        <div className="section2">

            <div className="waterMark">
                <div className="section2_two_button">
                    <ButtonComponent active={true} linkTo={"signUp"}>
                        <div className="homepage_button_arrow">
                            <div>Explore Full Catelog</div>
                            <FaArrowRight/>
                        </div>
                    </ButtonComponent>
                    <ButtonComponent active={false} linkTo={"logIn"}>
                        Learn More
                    </ButtonComponent>
                </div>
            </div>

            <div className="section2_heading_para">
                <div>
                    <h1>Get the skills you need for a
                    <HilightedText> job that is in demand.</HilightedText>
                    </h1>
                </div>

                <div>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
            </div>

            <ButtonComponent active={true} linkTo={"signUp"}>Learn More</ButtonComponent>

            <div className="section2_roadmap_photo">

                <div className="section2_roadmap">

                    <div className="section2_roadmap_logos">
                        <div><PiMedalFill /></div>
                        <div className="section2_roadmap_logos_vertical_line"></div>
                        <div><RiGraduationCapFill /></div>
                        <div className="section2_roadmap_logos_vertical_line"></div>
                        <div> <FaGem /></div>
                        <div className="section2_roadmap_logos_vertical_line"></div>
                        <div><RiCodeBoxFill /></div>
                    </div>
                    
                    <div className="section2_roadmap_logo_text">

                        <div>
                            <h4>Leadership</h4>
                            <p>Fully committed to the success company</p>
                        </div>

                        <div>
                            <h4>Responsibility</h4>
                            <p>Students will always be our top priority</p>
                        </div>

                        <div>
                            <h4>Flexibility</h4>
                            <p>The ability to switch is an important skills</p>
                        </div>

                        <div>
                            <h4>Solve the problem</h4>
                            <p>Code your way to a solution</p>
                        </div>
                        
                    </div>
                </div>

                <div className="section2_photo_container">

                    <div>
                        <img src={photo} height={350}></img>
                    </div>
                
                    <div className="section2_greenBlock_container">

                        <div className="greenBlock_ele">
                            <div className="greenBlock_ele1">10</div>
                            <div className="greenBlock_ele2">
                                <div>YEARS</div>
                                <div>EXPERIENCES</div>
                            </div>
                        </div>

                        <div className="greenBlock_line"></div>

                        <div className="greenBlock_ele">
                            <div className="greenBlock_ele1">250</div>
                            <div className="greenBlock_ele2">
                                <div>TYPES OF</div>
                                <div>COURSES</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <h1 className="section2_heading">Your swiss knife for <HilightedText>for learning any language</HilightedText></ h1>
            <p className="section2_para">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>

            <div className="section2_threePhotos">
                <img src={cheat} height={400}></img>
            </div>
            <div className="section2_end">
                <ButtonComponent active={true} linkTo={"/signUp"}>Learn More</ButtonComponent>
            </div>
            
        </div>

        {/**section 3 black background */}
        <div className="section3">

                <div className="section3_instructor">
                    <div>
                        <img src={instructor} height={450}></img>
                    </div>
                    <div>
                        <h1>Become an</h1>
                        <HilightedText>instructor</HilightedText>
                        <p>Instructor from around the world teach millions of student around on StudyNotion. We provide the tools and skills to teach what you love.</p>
                        <ButtonComponent active={true} linkTo={"/signUp"}>
                            <div className="homepage_button_arrow">
                                <div>Start Teaching Today</div>
                                <FaArrowRight/>
                            </div>
                        </ButtonComponent>
                    </div>
                </div>

                <div>
                    Reviews from other learners
                </div>

        </div>
        
        {/**section 4 footer */}
        <div className="footer">
            <Footer ></Footer>
        </div>

    </div>
)
};

export default Home;
