import React from "react"
import './AboutUs.css'
import HilightedText from "../core/home/hilightedText";
import aboutUs1 from '../../assets/aboutUs1.png'
import aboutUs2 from '../../assets/aboutUs2.png'
import aboutUs3 from '../../assets/aboutUs3.png'
import aboutUs4 from '../../assets/aboutUs4.png'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import ButtonComponent from '../core/home/buttonComponent'

const AboutUs = (props) => {
  return (
    <div className="aboutUs_wrapper">
        <div className="aboutUs_section1">
            <p>About Us</p>
            <h1>Driving Innovation in Online Education for a </h1>
            <HilightedText>Brighter Future</HilightedText>
            <p>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            <div className="aboutUs_section1_images">
                <img src={aboutUs1} height={280} alt=""></img>
                <img src={aboutUs2} height={280} alt=""></img>
                <img src={aboutUs3} height={280} alt=""></img>
            </div>
        </div>

        <div className="aboutUs_section2">
            <h1>
            <RiDoubleQuotesL color="gray"></RiDoubleQuotesL>
            We are passionate about revolutionizing the way we learn. Our innovative platform <HilightedText> combines technology</HilightedText>, <span> expertise</span>, and community to create an <span>unparalleled educational experience.</span>
            <RiDoubleQuotesR color="gray"></RiDoubleQuotesR>
            </h1>
        </div>

        <div className="aboutUs_section3">
            <div className="aboutUs_section3_firstBlock">
                <div>
                    <h1>Our Founding Story</h1>
                    <p>                
                        Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                    </p>
                    <br></br>
                    <p>
                        As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                    </p>
                </div>
                <div>
                    <img src={aboutUs4} alt="" height={280}></img>
                </div>
            </div>
            <div className="aboutUs_section3_secondBlock">
                <div>
                    <h1>Our Vision</h1>
                    <p>
                        With this vision in mind, we set out on a journey to create an e- learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                    </p>
                </div>
                <div>
                    <h1>Our Mission</h1>
                    <p>
                        Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                    </p>
                </div>
            </div>
        </div>

        <div className="aboutUs_section4">
            <div>
                <h1>5K</h1>
                <p>Active Students</p>
            </div>
            <div>
                <h1>10+</h1>
                <p>Mentors</p>
            </div>
            <div>
                <h1>200+</h1>
                <p>Courses</p>
            </div>
            <div>
                <h1>50+</h1>
                <p>Awards</p>
            </div>
        </div>

        <div className="aboutUs_section5">
            <div className="aboutUs_section5_firstBlock">
                <div className="aboutUs_section5_firstBlock_unique_part">
                    <h1>World-Class Learning for</h1>
                    <HilightedText>Anyone, Anywhere</HilightedText>
                    <p>Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
                    <ButtonComponent linkTo={"signUp"} active={true}>Learn More</ButtonComponent>
                </div>
                <div>
                    <h3>Curriculum Based on Industry Needs</h3>
                    <p>Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>   
                </div>
                <div>
                    <h3>Our Learning Methods</h3>   
                    <p>The learning process uses the namely online and offline.</p>   
                </div>

            </div>
            <div className="aboutUs_section5_secondBlock">
                <div>
                    <h3>Certification</h3>
                    <p>You will get a certificate that can be used as a certification during job hunting.</p>
                </div>
                <div>
                    <h3>Rating "Auto-grading"</h3>
                    <p>You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.</p>
                </div>
                <div>
                    <h3>Ready to Work</h3>
                    <p>Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.</p>
                </div>
            </div>
        </div>

    </div>
  )
};

export default AboutUs;
