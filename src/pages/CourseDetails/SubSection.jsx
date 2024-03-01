import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const SubSection = ({subSection}) => {

    const [subsectiondescVisibility , setSubsectiondescVisibility] = useState(false);

  return (
    <div className="CourseDetailsSection_eachSubsection">
        <div>
            <FaVideo></FaVideo>
        </div>                    
        <div>
            <section>
                <p>{subSection?.title}</p>
                <div onClick={(e) => {
                    e.stopPropagation();
                    setSubsectiondescVisibility((prev) => (!prev))
                }}>
                    {
                        !subsectiondescVisibility ? <IoIosArrowDown></IoIosArrowDown> : 
                        <IoIosArrowUp></IoIosArrowUp>
                    }
                </div>
            </section>
            <div>
                {subsectiondescVisibility &&<p>{subSection?.description}</p>}
            </div>
        </div>
        <div>{subSection?.timeDuration}</div>
    </div>
  )
};

export default SubSection;
