import React from "react"
import {Company , Resourses , Support , Plans , Community ,S_L_C} from '../../../data/footerData';
import './Footer.css'
import FooterCreaterHelper from "./FooterCreaterHelper";
import { TbLetterS } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { PiGoogleLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = (props) => {
    return (
    <div className="footer_wrapper">
      <div className="footer_upper_part">
        <div className="">
          <div className="footer_heading_logo">
            <div>
              <TbLetterS />
            </div>
            <h2>StudyNotion</h2>
          </div>
          <FooterCreaterHelper elements={Company}></FooterCreaterHelper>
          <div className="social_handle_container">
            <FaFacebook />
            <PiGoogleLogoFill />
            <FaTwitter />
            <IoLogoYoutube />
          </div>
        </div>
        <div className="">
            <FooterCreaterHelper elements={Resourses}></FooterCreaterHelper>
            <FooterCreaterHelper elements={Support}></FooterCreaterHelper>
        </div>
        <div className="">
            <FooterCreaterHelper elements={Plans}></FooterCreaterHelper>
            <FooterCreaterHelper elements={Community}></FooterCreaterHelper>
        </div>

        <div className="footer_vertical_line"></div>

        <div className="footer_top_right">
          {
            Object.values(S_L_C).map( (values , index) => (
              <FooterCreaterHelper elements={values} key={index}></FooterCreaterHelper>
            ))
          }
        </div>
      </div>
      <div className="footer_horizontal_line"></div>
      <div className="footer_bottom">
        <div>
          <div>Private Policy</div>
          <div>Cookie Policy</div>
          <div>Terms</div>
        </div>
        <div>
          Made with ♥ by Nikhil Kumar 14/01/2024
        </div>
      </div>
    </div>
  )
};

export default Footer;
