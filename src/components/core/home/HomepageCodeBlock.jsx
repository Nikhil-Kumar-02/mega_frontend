import React from "react";
import { TypeAnimation } from 'react-type-animation';

const HomepageCodeBlock = (props) => {
    const content = `<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`
  
    return (
    <div>
        {/* create the component as it is no need to pass anything */}
        <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
                `${content}`,
                1000,
                '',
            ]}
            repeat={Infinity}
        />
    </div>
  )
};

export default HomepageCodeBlock;
