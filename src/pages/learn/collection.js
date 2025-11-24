
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";



function Collection({allCollection, blogSelect}){
    const [searchParams, setSearchParams] = useSearchParams();
    const learnID = atob(searchParams.get("blog"));
    const [showCollections, setShowColelctions] = useState(false);

    const toggleCollections = () => setShowColelctions(!showCollections);

    const content = allCollection.map((c)=>{
         return <div className={"text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg " +( c.id == learnID ? 'text-purple-500 bg-slate-200 ' : 'text-slate-200')} onClick={()=>blogSelect(c.id)}>{c.title}</div>
    })
    // return JSON.stringify(allCollection);
    return <div className="mob:fixed mob:z-10" >
        <div className="p-3 pl-0 mob:relative">
        <div onClick={toggleCollections} className="des:hidden"><FaBars size={24} /></div>
        <div className="bg-slate-200"></div>
        {showCollections && <div className="mob:h-80 mob:overflow-auto mob:absolute mob:border mob:border-purple-400 mob:p-3 mob:z-50 mob:bg-slate-700">
            {content}
        </div> } 
       <div className="mob:hidden">{content}</div> 
    </div>
    </div>

}

export default Collection;