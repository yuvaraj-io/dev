import React, { useState } from "react";
import { usePostSectionMutation } from "../../store/apis/blog";
import { refreshApp } from "../../commons/common-method";


export default function SectionView({sectionData, sectionId, activeSectionId, topicId}){

    const [postSection, postStatus] = usePostSectionMutation();
    
    const setSection = (id) => {
        activeSectionId(id)
    }

    return <>
        {
            sectionData && sectionData.map((c)=>{
                return <div className={"text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg " + (c.id === sectionId ? "text-purple-500" : "") } 
                    onClick={() => setSection(c.id)}
                    >{c.id} {c.name}</div>
            })
        }
    </>
}