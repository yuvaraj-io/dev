import { redirect } from "../../commons/common-method";
export default function Card({props, border}){


    return <div className={`border border-${ border ? border : 'purple-400'} w-full`}>
        
        {
            props.title &&
            <h4 onClick={()=>redirect(props.medium)} className={`border-b border-slate-400  p-3 text-2r hover:bg-${border} cursor-pointer`}>{props.title}</h4>
        }

        
        <div >
           {props.content && <div className="p-4 pb-2 text-1.5r leading-tight">{props.content.split('').slice(0,200).join('') + '...'} <a href={props.medium} target="_blank" className={`text-purple-500 hover:underline `}>Read more</a></div>} 
           {props.stackblitz && <button className="m-4  border text-l border-solid border-purple-500 px-2r py-1r text-1.5r"  onClick={()=> redirect(props.stackblitz)} >Stackblitz</button>}
           {props.medium && <button className="m-4  border text-l border-solid border-purple-500 px-2r py-1r text-1.5r"  onClick={()=> redirect(props.medium)} >Medium</button>}
        </div>
        

    </div>
}