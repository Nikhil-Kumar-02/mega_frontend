import React, { useEffect, useState } from "react"
import './HomePageThreeCard.css'
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

const HomePageThreeCard = (props) => {

  const {heading , description , lessionNumber , level} = props.data;
  const selectedCard = props.selectedCard;
  const setCurrSelctHandler = props.changeSelectedCard;

  function toggleSelectedCard(){
    console.log(heading)
    setCurrSelctHandler(heading);
  }

  return (
    <div className={heading !== selectedCard ? "HomePageThreeCard_darkbg" : "HomePageThreeCard_whitebg"} onClick={toggleSelectedCard}>
        <h4>{heading}</h4>
        <div>{description}</div>
        <hr className="horizontal_line"></hr>
        <div className="HomePageThreeCard_footer">
            <div><FaUserGroup />{level}</div>
            <div><ImTree />{lessionNumber} Lessons</div>
        </div>       
    </div>
  )
};

export default HomePageThreeCard;
