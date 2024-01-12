import React from "react"
import HilightedText from "./hilightedText";
import './HomePageTextBlock.css'

const HomePageTextBlock = ({text1 , text2 , hilightedText , children}) => {
  return (
    <div className="HomePageTextBlock">
      <h2>
        {text1}
        <HilightedText>{hilightedText}</HilightedText>
        {text2}
      </h2>
      <p>{children}</p>
    </div>
  )
};

export default HomePageTextBlock;
