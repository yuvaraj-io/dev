import { BsArrowRight } from "react-icons/bs";

export default function Heading({line, arrow, icon, text, ...props}){

    return <div className="py-2r flex justify-between items-center" {...props}>
        <div className="flex items-center gap-6 ">
            <h2 className="text-4r flex gap-3 mob:text-3r"><span className="text-purple-500">{icon}</span> {text}</h2>
            {line && <div className="h-1 w-96 bg-slate-200 rounded-sm mob:hidden"></div>}
        </div>
       
        {arrow && 
        <div className="flex gap-3 items-center cursor-pointer mob:hidden">
            <span className="text-2r pl-1r">{arrow}</span>
            <span>
                <BsArrowRight size={30}/>
            </span>
        </div>
        }
    </div>
}