import React from 'react';
import Heading from "./ui-reusables/Heading";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Download from "./ui-reusables/Download";

export default function AboutMe() {
    const navigate = useNavigate();

    const redirectToLink = (path) => {
        navigate(path)
    }

    return (
        <div>

            <p className="pt-3r leading-tight font-extralight text-2r">
                Hey, I’m <span className='text-purple-400'>Yuvaraj</span>, a Fullstack (MERN/MEAN) Developer and Frontend Specialist based in India.
                I studied Pre-University and earned a B.Com degree from Christ University.  
                With <span className='text-purple-400'>7+ years</span>  of experience — <span className='text-purple-400'>5+ years</span> in product-based companies and <span className='text-purple-400'>2</span> years in service-based companies — 
                I’ve gained strong expertise in building, scaling, and maintaining modern web applications.  
                My product experience strengthened my understanding of application architecture, while my service-based work enhanced my delivery,
                communication, and adaptability skills.
            </p>

            <p className="pt-2r leading-tight font-extralight text-2r mb-2r">
                I’m now looking for a <span className='text-purple-400'>Fullstack Developer</span> role where I can mentor teams, manage deployments,
                handle CI/CD pipelines, oversee code merges, and proactively identify and resolve application issues.
                I aim to strengthen my leadership skills while continuing to build scalable, high-performance frontend and backend applications.
            </p>

            <Download />

            <div className='pt-3r'>
                <Heading icon="-" text="What I Can Offer" />

                {/* Fullstack / Node.js Section */}
                <p className='pt-4 text-2r text-yellow-400'>Fullstack (Node.js, Express, MongoDB, SQL)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight">
                    <li>Building backend APIs using Node.js, Express, and MongoDB</li>
                    <li>Authentication, routing, middleware, validation, and database modeling</li>
                    <li>Developing REST APIs for modern Angular/React/Vue applications</li>
                    <li>Working with SQL databases for relational data workflows</li>
                    <li>Integrating backend and frontend seamlessly for fast, scalable apps</li>
                    {/* <li>Experience with deployment, environment setup, and production optimization</li> */}
                </ul>

                {/* React */}
                <p className='pt-4 text-2r text-blue-400'>React (5+ Years Expertise)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Capable of building complete, functional React applications</li>
                    <li>Experience developing real-world projects, including this website</li>
                    <li>Skilled in developing new applications from scratch using modern React architecture</li>
                </ul>

                {/* Angular */}
                <p className='text-2r text-red-400'>Angular (5+ Years Expertise)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Version Upgrades — Upgrading Angular 2+ applications to latest versions</li>
                    <li>AngularJS to Angular Migration — Hand-coded custom migration solutions</li>
                    <li>Expertise in components, directives, services, signals, and standalone components</li>
                    <li>Building scalable, maintainable Angular applications end-to-end</li>
                </ul>

                {/* Vue */}
                <p className='pt-4 text-2r text-green-400'>Vue (5+ Years Expertise)</p>
                <ul className="pl-8 list-disc ml-6 mt-3 text-2r leading-tight ">
                    <li>Migrating legacy applications to Vue 2 and Vue 3</li>
                    <li>Developing new Vue applications with modern architecture</li>
                    <li>Experienced in Vue migration projects ensuring maintainability and stability</li>
                </ul>

            </div>

            <div className='pt-6'>
                <Heading icon="-" text="My work flow" />

                <ul className=" ml-6 mt-3 text-2r leading-snug pb-2r ">
                    <li>Understanding the Application – Analyzing layout, data flow, and architecture before implementing changes.</li>
                    <li>Enhancing User Experience – Adding loaders, skeletons, validation, and polished UI interactions.</li>
                    <li>Code Optimization & Best Practices – Refactoring code for maintainability and long-term scalability.</li>
                    <li>Testing & Bug Fixing – Ensuring smooth, reliable functionality with thorough testing.</li>
                    <li>Clear Communication – Coordinating with stakeholders to ensure clarity and accurate delivery.</li>
                    <li>Maintaining & Scaling – Keeping applications modular, scalable, and ready for future business needs.</li>
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
                                href="https://wa.me/917204447908"
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

                </div>
            </div>

        </div>
    )
}
