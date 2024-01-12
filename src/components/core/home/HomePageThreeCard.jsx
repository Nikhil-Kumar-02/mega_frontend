import React from "react"
import './HomePageThreeCard.css'
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

const HomePageThreeCard = ({heading , children , active}) => {
  return (
    <div className={active ? "HomePageThreeCard_darkbg" : "HomePageThreeCard_whitebg"}>
        <h4>{heading}</h4>
        <div>{children}</div>
        <hr className="horizontal_line"></hr>
        <div className="HomePageThreeCard_footer">
            <div><FaUserGroup /> Beginner</div>
            <div><ImTree /> 6 Lessons</div>
        </div>       
    </div>
  )
};

export default HomePageThreeCard;
