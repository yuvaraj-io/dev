import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
import { skills, featured } from "../commons/constants";
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import Download from "./ui-reusables/Download";

export default function Home(){
  const navigate = useNavigate();

  const redirectToLink = (path) => {
    navigate(path)
  }


    return <div className="">
      <div className="py-3r flex gap-10 justify-between mob:flex-col-reverse">
        <div className="flex flex-col justify-center w-full">
            <div>   
            <h1 className="pb-2r text-4r mob:text-mainm1">Hi, I'm <span className="text-purple-400">Yuvaraj </span> – Full Stack Developer with Node.js & UI Specialist</h1>
                <p className="pb-3r leading-tight font-extralight text-2r">
                    I’m a <span className="text-purple-400">Full Stack Developer with 7+ years</span> of experience delivering scalable, high-performance web applications. My expertise spans <span className="text-purple-400"> <span className="text-red-400">Angular,</span> <span className="text-blue-400">React,</span> <span className="text-green-400">Vue.js</span>, and Node.js/Express, </span> combined with solid experience in <span className="text-green-400">MongoDB </span>and <span className="text-blue-400">SQL</span>.
                  </p>
                <Download />
                <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r ml-5" onClick={() => redirectToLink('connect')}>Connect me!!</button>
            </div>
        </div>
        <div className="profile-pic w-full">
            <img className="h-full w-full" alt="yuvaraj" src="/assets/profile/yuvaraj.png"/>
        </div>
      </div>

      <div className="pt-2r">

        <Heading icon="#" text="Portfolio" line={true} arrow="View all" onClick={() => redirectToLink('portfolio')}/>
       
        <div className="flex gap-5 justify-between py-2r mob:flex-wrap">
          <Card props={featured.tred}/>
          <Card props={featured.pitchpro}/>
          <Card props={featured.yuvidev}/>
        </div>


      <div className="pt-2r">
       <Heading  icon="-" text="Skills" line={false}/>
          <div className="pt-2r flex gap-5 justify-between">
              {/* <div className="w-full flex-grow-0">
                <img className="pt-4 h-96" alt="skill" src="/assets/skill.png" />
              </div> */}
              <div className="w-full flex-grow">
                  <div className="flex gap-2 flex-wrap gap-3">
                    <Card  props={skills.language}/>
                    <Card  props={skills.framework}/>
                    <Card props={skills.database}/>
                    <Card props={skills.npm}/>
                    <Card props={skills.tools}/>
                  </div>
                  <div className="flex gap-2 pt-2">
                    {/* <Card props={skills.database}/>
                    <Card props={skills.npm}/> */}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {/* <Card props={skills.tools}/> */}
                  </div>
              </div>
          </div>
      </div>

      <div className="py-3r">
        <Heading icon="#" text="about-me" line={true} onClick={() => redirectToLink('about')}/>  
        <div className="flex pt-2r gap-4 mob:flex-wrap"> 
          <div className="w-full">
              <p className="text-2r text-slate-400 leading-snug">
                I’m a full-stack <span className="text-purple-400">(MERN/MEAN)</span> and frontend-focused engineer who builds web applications that align tightly with product and business goals. I combine strong UI/UX thinking with solid backend engineering to deliver solutions that are functional, scalable, and easy to maintain.
              </p>
              <p className="pt-4r text-2r text-slate-400 leading-snug">
                On the frontend, I specialize in creating intuitive user experiences using Angular, Vue.js, and React. On the backend, I work with Node.js, Express, MongoDB, and SQL to build reliable APIs and application architecture.
              </p>
              <p className="pt-4r text-2r text-slate-400 leading-snug">
                Beyond development, I focus on performance, quality assurance, and smooth CI/CD deployments. Whether improving existing features or delivering new applications end-to-end, I ensure the product is fast, stable, and ready for long-term growth.
              </p>
              <p className="pt-2r text-2r text-purple-400 leading-snug" onClick={() => redirectToLink('about')}>Click here to learn more about me and my workflow</p>
          </div>
          <div className="w-full">
            <img className="h-full w-full" alt="yuvaraj" src="/assets/profile/image.png"/>
          </div>
        </div>
      </div>
      <div className="py-3r">
        <Heading icon="#" text="Connect me" line={true} onClick={() => redirectToLink('connect')}/>  
        <div className="flex justify-between">
              
               <div className="w-full flex gap-6">
                    <div className="border border-slate-400 p-1.5r w-96">
                        <p className="text-2r pb-1r">Contact me here</p>
                        <a  href="tel:+917204447908" className="text-slate-400 text-1.5r mt-2r">+91 72044 47908</a>
                    </div>
                    <div className="border border-slate-400 p-1.5r flex-col w-96">
                        <p className="text-2r pb-1r">Message me here</p>
                        
                            <a
                                href="https://wa.me/917204447908" // Replace with your WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-green-500 flex gap-2"
                            >
                            <FaWhatsapp className="text-green-500 text-3xl " />

                                Connect on WhatsApp
                            </a>

                            <a
                                href="mailto:developer@yuvidev.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-blue-500 flex items-center gap-2"
                             >
                                <MdEmail className="text-blue-500 text-3xl" />
                                Email: yuvarajthecoder@gmail.com
                            </a>
                            <a
                                href="mailto:yuvarajthecoder@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-blue-500 flex items-center gap-2"
                             >
                                <MdEmail className="text-red-500 text-3xl" />
                                Gmail: yuvarajthecoder@gmail.com
                            </a>
                            
                    </div>
                </div> 
                {/* <div className="w-full">
                    <p className="text-slate-400 text-1.5r">I’m interested in developing ideas that bring life to application, if you have a opportunity that aligns with our goals let's connect!</p>
                </div>  */}
            </div>
      </div>
      </div>
    </div>
}