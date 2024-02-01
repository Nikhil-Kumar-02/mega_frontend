import React from "react"
import './AboutUs.css'
import HilightedText from "../core/home/hilightedText";
import aboutUs1 from '../../assets/aboutUs1.png'
import aboutUs2 from '../../assets/aboutUs2.png'
import aboutUs3 from '../../assets/aboutUs3.png'

const AboutUs = (props) => {
  return (
    <div className="aboutUs_wrapper">
        <div className="aboutUs_section1">
            <p>About Us</p>
            <h1>Driving Innovation in Online Education for a </h1>
            <HilightedText>Brighter Future</HilightedText>
            <p>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            <div className="aboutUs_section1_images">
                <img src={aboutUs1} height={280}></img>
                <img src={aboutUs2} height={280}></img>
                <img src={aboutUs3} height={280}></img>
            </div>
        </div>
      
    </div>
  )
};

export default AboutUs;
