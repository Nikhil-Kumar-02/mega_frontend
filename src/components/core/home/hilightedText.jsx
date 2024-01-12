import React from "react"
import './hilightedText.css'

const HilightedText = ({text}) => {
  return (
    <span className="hilightedText">
      {text}
    </span>
  )
};

export default HilightedText;
