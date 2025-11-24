import { redirect } from "../../commons/common-method";
export default function Card({props}){
    const renderedItems = [];
    for (let i = 0; i < props.skills.length; i++) {
        renderedItems.push(<span className="pl-2 text-slate-400" key={i}>{props.skills[i]}</span>);
    }
    
    return <div className="border border-slate-400">
        {
            props.heading &&
            <h4 className="border-b border-slate-400 text-white p-3 text-1.5r">{props.heading}</h4>
        }

       {props.img &&  <div className="border-b border-slate-400 p-2">
            <img src={props.img}   alt="card"/>
        </div>}

        {
            props.skills.length && 
            <div className="border-b border-slate-400 p-4 text-1.5r">
                {renderedItems}
            </div>
        }

        <div>
           {props.mainHeading && <h4 className="text-3r p-4 pb-2">{props.mainHeading}</h4>} 
           {props.subtitle && <div className="text-l pl-4 pb-2 text-slate-400 text-1.5r leading-snug">{props.subtitle}</div> } 
           {props.link && <button className="m-4  border text-l border-solid border-purple-500 px-2r py-1r text-1.5r"  onClick={()=> redirect(props.link)} >Live</button>}
        </div>
        

    </div>
}