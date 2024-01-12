import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './HomepageCodeBlock.css'

const HomepageCodeBlock = (props) => {
    const content = `<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n<a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`
  
    return (
    <div className="HomepageCodeBlock_wrapper">
        {/* create the component as it is no need to pass anything */}
        <TypeAnimation
            style={{ whiteSpace: 'pre-line' , fontSize:'0.8rem' , color:'white' , fontFamily:'cursive'}}
            sequence={[
                `${content}`,
                100,
                '',
            ]}
            repeat={Infinity}
            omitDeletionAnimation={true}
        />
    </div>
  )
};

export default HomepageCodeBlock;
