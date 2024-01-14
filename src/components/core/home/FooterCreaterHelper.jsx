import React from "react"

const FooterCreaterHelper = ({elements}) => {
  return (
    <div>
        <h4>{elements[0]}</h4>
        {
            elements.map( (ele,index) => {
                if(index === 0){
                return null; 
                }
                return (
                    <div key={index}>{ele}</div>
                )
            })
        }
    </div>
  )
};

export default FooterCreaterHelper;
