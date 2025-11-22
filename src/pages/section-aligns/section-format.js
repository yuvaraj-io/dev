import React, { useState } from "react";
import { usePostSectionMutation } from "../../store/apis/blog";
import { refreshApp } from "../../commons/common-method";


export default function SectionFormat({sectionData, sectionId, activeSectionId, topicId}){

    const [sectionValue, setSectionValue] = useState();
    const [postSection, postStatus] = usePostSectionMutation();
    
    const setSection = (id) => {
        activeSectionId(id)
    }

    const submit = async () => {
        try{
            const response = await  postSection({name: sectionValue, order_no: sectionData?.length, topicId: atob(topicId) })
            refreshApp();
        }catch(error){
            console.log(error);
        }
       
    }

    return <>
        {
            sectionData && sectionData.map((c)=>{
                return <div className={"text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg " + (c.id === sectionId ? "text-purple-500" : "") } 
                    onClick={() => setSection(c.id)}
                    >{c.id} {c.name}</div>
            })
        }
        <div className="pt-8">
            <input type="text" className="w-100 text-2.5r text-purple-500" value={sectionValue} onChange={(e) => setSectionValue(e.target.value)}/>
            <br/>
         
            <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r ml-5 mt-5" onClick={submit} disabled={postStatus?.isLoading}>Submit</button>
        </div>
    </>
}