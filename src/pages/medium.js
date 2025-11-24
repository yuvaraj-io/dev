import { medium } from '../commons/constants';
import Heading from './ui-reusables/Heading';
import MediumCard from './ui-reusables/MediumCard';
import { FaAngular, FaReact, FaJs } from "react-icons/fa";
import RxJSIcon from '../icons/Rxjs';
import { redirect } from '../commons/common-method';

function Medium(){


    

    
    return <div>
        <Heading icon="/" text="Medium" />

        <div className="pt-2r">
            <Heading icon={<FaJs color='#e2a414ff'/>}  text="Javascript" line={true} arrow="View all" onClick={() => redirect('https://medium.com/@yuvaraj.io/list/javascript-by-yuvaraj-1fc7ba9201f2')}/>
            <div className='grid grid-cols-4  mob:grid-cols-1 gap-3 pt-1r'>
            {medium.javascript.map((m, i) =>  <MediumCard props={m} border="yellow-400" key={i} /> )}
            </div>
        </div>


        <div>
            <Heading icon={<FaAngular color='#DD0031'/>} text="Angular" line={true} arrow="View all" onClick={() => redirect('https://medium.com/@yuvayuvaraj720444/angular-intermediate-lessons-acbea2dfc9b')}/>
            <div className='grid grid-cols-4  mob:grid-cols-1 gap-3 pt-1r '>
                {medium.angular.map((m, i) =>  <MediumCard props={m} border="red-400" key={i} /> )}
            </div>
        </div>

        <div className="pt-2r">
            <Heading icon={<RxJSIcon color='#F7DF1E'/>} text="Rxjs Operators" line={true} arrow="View all" onClick={() => redirect('https://medium.com/@yuvidev/rxjs-operators-section-c965d3690dd4')}/>
            <div className='grid grid-cols-4  mob:grid-cols-1 gap-3 pt-1r'>
            {medium.rxjs.map((m, i) =>  <MediumCard props={m} border="pink-400"  key={i} /> )}
            </div>
        </div>

        <div className='pt-5r'></div>



    </div>
}

export default Medium;