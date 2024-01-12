import React from "react"
import './hilightedText.css'

const HilightedText = ({children}) => {
  return (
    <span className="hilightedText">
      {" "}
      {children}
      {" "}
    </span>
  )
};

export default HilightedText;
