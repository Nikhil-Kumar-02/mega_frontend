import React, { useEffect, useState } from "react";
import './CourseDetailsSection.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SubSection from "./SubSection";

const CourseDetailsSection = ({section , collapseAll , setCollaspeAll}) => {
    const [subsectionVisibility , setSubsectionVisibility] = useState(false);
    
    useEffect(() => {
        if (collapseAll) {
            setSubsectionVisibility(false);
            setCollaspeAll(false);
        }
    }, [collapseAll]);

  return (
    <div className="CourseDetailsSection_eachSection" onClick={() => setSubsectionVisibility((prev) => (!prev))}>
        <section>
            <div>
                {subsectionVisibility ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}
                <p>{section?.sectionName}</p>
            </div>
            <div>
                <p>{section?.subSection.length} Lectures</p>
                <p>{section?.totalSectionDuration} minutes is wrong</p>
            </div>
        </section>
        <div>
        {
            subsectionVisibility &&
            <div onClick={(e)=>{e.stopPropagation()}}>
            {
                section?.subSection.map((eachSubsection) => (
                    <SubSection subSection={eachSubsection}></SubSection>
                ))
            }
            </div>
        }
        </div>
    </div>
  )
};

export default CourseDetailsSection;
