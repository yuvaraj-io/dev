
import {redirect} from '../../commons/common-method'
function StackblitzCard({ icon, color, props}){
    return <div className={`group border p-3 relative cursor-pointer border-${color}`} onClick={() => redirect(props.url)}>
        <div className='hidden group-hover:block absolute right-3'>
            {icon}
        </div>
        <div className='text-2.5r  hover:text-purple-400 hover:underline cursor-pointer'>{props.title}</div>
        <div className='text-1.5r text-slate-300 pt-4 leading-tight'>{props.description}</div>
    </div>;
}

export default StackblitzCard;