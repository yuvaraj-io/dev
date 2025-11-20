import React from 'react';
import Heading from "./ui-reusables/Heading";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Download from "./ui-reusables/Download";

export default function AboutMe() {
    const navigate = useNavigate();

    const redirectToLink = (path) => {
        debugger
        navigate(path)
    }
    return (



        <div>

            <p className="pt-3r leading-tight font-extralight text-2r">
                Hey, I’m <span className='text-purple-400'>Yuvaraj</span>, a Frontend Developer based in India. I studied Pre-University and earned a B.Com degree from Christ University.
                With 7+ years of experience, I’ve worked 5+ years, product-based and 2 year, service-based. My time in the product space taught me the core aspects of web application development, while my service-based experience refined my skills in delivering projects and client communication.

                {/* Hey, I'm Yuvaraj – a passionate Frontend Engineer with 6.5+ years of experience.
            I specialize in <span className='text-purple-400'>Angular, Vue.js, and React</span>, helping businesses build, optimize,
            and migrate their applications for modern web solutions. */}
            </p>

            <p className="pt-2r leading-tight font-extralight text-2r mb-2r">
                I’m now looking for a <span className='text-purple-400'>Lead Frontend Developer</span> role where I can mentor a team, manage deployments, oversee code merges, and proactively identify and resolve application issues. I want to enhance my leadership skills while continuing to build scalable, high-performance applications.
            </p>

            <Download />

            <div className='pt-3r'>
                <Heading icon="-" text="What I Can Offer" />
                <p className='text-2r text-red-400'>Angular (5+ Years Expertise)</p>

                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Version Upgrades – Seamlessly upgrading Angular 2+ applications to the latest versions.</li>
                    <li>AngularJS to Angular Migration – Hand-coded solutions </li>
                    <li>Component-Based Architecture – Expertise in components, directives, services, signals, and standalone components</li>
                    <li>End-to-End Application Development – Building scalable, maintainable applications from scratch.</li>
                </ul>

                <p className='pt-4 text-2r text-blue-400'>React  (Basic Proficiency)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Capable of building functional React applications</li>
                    <li>Hands-on experience in developing projects similar to this website </li>
                    <li>Can develop new applications from scratch with React</li>
                </ul>

                <p className='pt-4 text-2r text-green-400'>Vue  (Migration & Development)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Legacy to Vue Migration – Upgrading applications to Vue 2.0 and Vue 3.0</li>
                    <li>New Vue Applications – Developing modern, scalable applications from scratch.</li>
                    <li>Hands-on experience in Vue migration projects, ensuring maintainability and scalability.</li>
                </ul>

            </div>


            <div className='pt-6'>

                <Heading icon="-" text="My work flow" />

                <ul className=" ml-6 mt-3 text-2r leading-snug pb-2r ">
                    <li>Understanding the Application – Analyzing the layout, core code structure, and existing implementation to plan improvements.</li>
                    <li> Enhancing User Experience – Implementing shimmers, loaders, forms, validation, and error handling for smooth interactions.</li>
                    <li>Code Optimization & Best Practices – Restructuring code to follow industry best practices, aligning with both personal and company standards for maintainability.</li>
                    <li>Testing & Bug Fixing – Conducting thorough testing to eliminate bugs and ensure all functionalities work seamlessly.</li>
                    <li> Clear Communication – Collaborating with requirement holders to avoid confusion and ensure clarity in project expectations.</li>
                    <li>Maintaining & Scaling – Keeping the code clean, maintainable, and scalable for future enhancements and business growth.</li>
                </ul>
            </div>

            <div className="py-3r">
                <Heading icon="#" text="Connect me" line={true} onClick={() => redirectToLink('about')} />
                <div className="flex justify-between">

                    <div className="w-full flex gap-6">
                        <div className="border border-slate-400 p-1.5r w-96">
                            <p className="text-2r pb-1r">Contact me here</p>
                            <a href="tel:+917204447908" className="text-slate-400 text-1.5r mt-2r">+91 72044 47908</a>
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
                                Email: developer@yuvidev.in
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
    )
}

