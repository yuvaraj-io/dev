import StackblitzCard from "./ui-reusables/StackblitzCard";
import { stackblitz } from "../commons/constants";
import Heading from "./ui-reusables/Heading";
import { FaAngular, FaReact, FaVuejs, FaJs } from "react-icons/fa";
import RxJSIcon from '../icons/Rxjs';
import { redirect } from '../commons/common-method';


function Stackblitz(){
    const stackCollections = () => {
        redirect('https://stackblitz.com/@Yuvaraj-2001/collections')
    }
    return <div>
        <Heading icon="/" text="Stackblitz Code Collections" onClick={stackCollections} />
        <div>
   
            <Heading icon={<FaJs color='#facc14' size={40}/>} text="" line={true} arrow="All collections"  onClick={stackCollections}/>
            <div className="border-yellow-400"></div>
            <div className="grid grid-cols-4 mob:grid-cols-2 gap-6 py-2r">
                {stackblitz.js.map((item, index) => (
                    <StackblitzCard key={index} icon={<FaJs color='#facc14' size={30}/>} color="yellow-400" props={item}  />
                ))}
            </div> 
        </div>
        <div>
            <Heading icon={<FaAngular color='#f97272' size={40}/>} text="" line={true} arrow="All collections"  onClick={stackCollections}/>
            <div className="grid grid-cols-4 mob:grid-cols-2 gap-6 py-2r">
                {stackblitz.angular.map((item, index) => (
                    <StackblitzCard key={index} icon={<FaAngular color='#f97272' size={30}/>} color="red-400" props={item} />
                ))}
            </div>    
        </div>

        <div>
            <Heading icon={<RxJSIcon color='#F7DF1E'/>} text="" line={true} arrow="All collections"  onClick={stackCollections}/>
            <div className="border-pink-400"></div>
            <div className="grid grid-cols-4 mob:grid-cols-2 gap-6 py-2r">
                {stackblitz.rxjs.map((item, index) => (
                    <StackblitzCard key={index} icon={<RxJSIcon color='#F7DF1E' size={30}/>} color="pink-400" props={item} />
                ))}
            </div>    
        </div>

        <div>
            <Heading icon={<FaReact color='#60a5fa' size={40}/>} text="" line={true} arrow="All collections"  onClick={stackCollections}/>
            <div className="border-blue-400"></div>
            <div className="grid grid-cols-4 mob:grid-cols-2 gap-6 py-2r">
                {stackblitz.react.map((item, index) => (
                    <StackblitzCard key={index} icon={<FaReact color='#60a5fa' size={30}/>} color="blue-400" props={item} />
                ))}
            </div>    
        </div>

        <div>
            <Heading icon={<FaVuejs color='#47de7f' size={40}/>} text="" line={true} arrow="All collections"  onClick={stackCollections}/>
            <div className="border-green-400"></div>
            <div className="grid grid-cols-4 mob:grid-cols-2 gap-6 py-2r">
                {stackblitz.vue.map((item, index) => (
                    
                    <StackblitzCard key={index} icon={<FaVuejs color='#47de7f' size={30}/>} color="green-400" props={item} />
                ))}
            </div>    
        </div>
        
    </div>;
}

export default Stackblitz;