import { useState } from "react";
import { useFetchTopicsQuery } from "../../store/apis/blog";
function SelectTopics({topicSend}){
    const {data, error, isLoading} =  useFetchTopicsQuery();
    const [activeTopic, setActiveTopic] = useState({});

    const redirect = (t) => {
        topicSend(t);
        setActiveTopic(t);
    }

    let content;
    if(isLoading){
        content = <div className="flex justify-center items-center h-full">
            <div className="w-12 h-12 rounded-full bg-slate-300 animate-spin" /> loading...
        </div>
    }else if(data){
        content = data.map((n, i)=> <div key={i} className={ activeTopic.id === n.id ? `bg-purple-400 text-slate-200 p-2` : `text-slate-200 p-2`} onClick={()=>redirect(n)}><span className="hover:text-gray-300">{n.name}</span></div>)  
    }

    return <div className="flex gap-3">
        <div className="flex items-center p-2 text-2r">
          <div className="bg-slate-400 p-2 mr-2">Select:-  </div>  {content}
        </div>
    </div>
}

export default SelectTopics;