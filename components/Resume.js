import Image from 'next/image';
import useWindowPosition from '../hook/useWindowPosition';
import profilePic from '../public/img/profilepic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Resume = ({data}) => {


    if (data) {
        var name = data.name;
        var profilepic = "img/" + data.image;
        var bio = data.bio;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var phone = data.phone;
        var email = data.email;
        var resumeDownload = data.resumedownload;
    }


    return (
        <section 
            className="flex justify-center py-20"
            style={{
            background: '#ffffff',
            }}
            id="resume" 
        >
            <div className="container">
                <div className="grid gird-cols-1 lg:grid-cols-12">
                    <div className="col-span-5">
                        {/* <div className="mb-5 pb-5 md:mb-10 md:pb-10">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3  pl-2">
                                Skills
                            </h2>
                            <ul className="mt-2 grid grid-cols-1 gap-y-9 md:grid-cols-2 pl-2" role="list">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>JQuery</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>C#</li>
                                <li>.NET MVC</li>
                                <li>Service Virtualisation</li>
                            </ul>
                        </div> */}
                        
                        <div className="mb-5 pb-5 md:mb-10 md:pb-10">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                    Education
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">BSc in Electronics and Communication Engineering</div>
                                        <div className="text-sm">Khulna University - Khulna, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> September 2009 to July 2014 </span></div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> H.S.C </div>
                                        <div className="text-sm">Keshabpur College - Keshabpur, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> September 2005 to July 2007 </span></div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> S.S.C </div>
                                        <div className="text-sm">Sagardary High School - Keshabpur, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> July 2005 </span></div>
                                    </li>
                            </ul>
                        </div>

                        <div className="mb-5 pb-5 md:mb-10 md:pb-10">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                Training and Certification
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                    <li className="relative pl-8 md:ml-10 lg:ml-5 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">Marketing SEO Expert Certification form Bdjobs (SEIP).</div>
                                        <div className="text-sm">BITM</div>
                                    </li>
                                    <li className="relative pl-8 md:ml-10 lg:ml-5 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> Google Cloud Certified (Udemy)</div>
                                        <div className="text-sm">Udemy</div>

                                    </li>
                                    <li className="relative pl-8 md:ml-10 lg:ml-5 border-l border-solid border-gray-200 pb-10">
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> Zero Budget Marketing System for Any Business Certification.</div>
                                        <div className="text-sm">Udemy</div>
            
                                    </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="lg:row-span-5 lg:col-span-7 lg:pl-8 lg:pb-0">
                        <div className="mb-5 pb-5 md:mb-10 md:pb-10 col-span-4">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                    Experience
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block"></span>
                                        <div className="font-bold"> Sr. Full Stack Developer</div>
                                        <div className="text-sm">Navana Group - Dhaka</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Feb 2018 - Present</span></div>
                                        <div className="text-sm leading-7">
                                            <dl className="">
                                                <dt id=""> Responsiblities </dt>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Designed and developed in-house web applications and websites for popular brands using PHP, Laravel, CodeIgniter, ReactJs</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Developed in-house apllications (Frontned and backend) eg. Navana Portal, Ticketing System, Leave Approval System.</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Developed online attendence system using React Native</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Providing leadership as a subject matter expert (SME) on hosting issues, client and staff logins, and general upfrades/maintenance of servers</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Project Management tools Git, Github, Bitbucket, Trello, Source Tree</dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block"></span>
                                        <div className="font-bold"> Software Engineer</div>
                                        <div className="text-sm">Eicra Soft Ltd. - Dhaka</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Nov 2017 - Jan 2018</span></div>
                                        <div className="text-sm leading-7">
                                            <dl className="">
                                                <dt id="">
                                                    Responsiblities
                                                </dt>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Customized existing web application (B2B)</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Applications development using Kendo UI, Zend framework and tested all applications with Selenium</dd>
                                                <dd role="defination" aria-labelledby=""
                                                className="ml-7 pb-0 list-item list-disc"> Project Management tools SVN, Git, Bitbucket</dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                        {/* <i className=""></i> */}
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">Full Stack Web Developer</div>
                                        <div className="text-sm">ItShift INC. - Dhaka</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Sept 2015 - Oct 2017</span></div>
                                        <div className="text-sm leading-7">
                                            <dl className="">
                                                <dt id="">
                                                    Responsiblities
                                                </dt>
                                                <dd role="defination" aria-labelledby=""
                                                    className="ml-7 pb-0 list-item list-disc"> Successfully generated back-end programming untilizing PHP, MySql, CodeIgniter</dd>
                                                <dd role="defination" aria-labelledby=""
                                                    className="ml-7 pb-0 list-item list-disc"> Job Portal Web Application development with CodeIgniter</dd>
                                                <dd role="defination" aria-labelledby=""
                                                    className="ml-7 pb-0 list-item list-disc"> Research, design and implement best practice solutions to new problems</dd>
                                                <dd role="defination" aria-labelledby=""
                                                    className="ml-7 pb-0 list-item list-disc"> WordPress theme development and customization</dd>

                                            </dl>
                                        </div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                        {/* <i className=""></i> */}
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">Full Stack Web Developer (Remote)</div>
                                        <div className="text-sm">Lynck.com - Providence, RI, US</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Jun 2012 - Aug 2015</span></div>
                                        <div className="text-sm leading-7">
                                            <dl className="">
                                                <dt id="">
                                                    Responsiblities
                                                </dt>
                                                <dd role="defination" aria-labelledby="{id}"
                                                className="ml-7 pb-0 list-item list-disc"> Development of multithreaded application that interfaced with payment gateway</dd>
                                                <dd role="defination" aria-labelledby="{id}"
                                                className="ml-7 pb-0 list-item list-disc"> Full lifecycle development using HTML5/CSS3, Bootstrap, JavaScript, PHP, Laravel, WordPress.</dd>
                                                <dd role="defination" aria-labelledby="{id}"
                                                className="ml-7 pb-0 list-item list-disc"> Created e-commerce sites intgrated with Paypal, Stripe and other Payment APIs</dd>

                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                        </div>

                        {/* <div className="mb-5 pb-5 md:mb-10 md:pb-10 col-span-4">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                    Education
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">BSc in Electronics and Communication Engineering</div>
                                        <div className="text-sm">Khulna University - Khulna, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> September 2009 to July 2014 </span></div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> H.S.C </div>
                                        <div className="text-sm">Keshabpur College - Keshabpur, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> September 2005 to July 2007 </span></div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> S.S.C </div>
                                        <div className="text-sm">Sagardary High School - Keshabpur, West Bengal</div>
                                        <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> July 2005 </span></div>
                                    </li>
                            </ul>
                        </div> */}

                        {/* <div className="mb-5 pb-5 md:mb-10 md:pb-10 col-span-4">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                Training and Certification
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold">Marketing SEO Expert Certification form Bdjobs (SEIP).</div>
                                        <div className="text-sm">BITM</div>
                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> Google Cloud Certified (Udemy)</div>
                                        <div className="text-sm">Udemy</div>

                                    </li>
                                    <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-10">
                                        <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute -left-2 top-1 bg-white hidden md:block transition-all duration-500"></span>
                                        <div className="font-bold"> Zero Budget Marketing System for Any Business Certification.</div>
                                        <div className="text-sm">Udemy</div>
            
                                    </li>
                            </ul>
                        </div> */}

                    </div>
                    
                </div>

                <div className="grid lg:grid-cols-4 gap-10">
                    <div className="shadow bg-white rounded-lg p-6 transition duration-200 ease-in-out transform hover:shadow-lg">
                        <h6 className="font-bold">FRONT-END</h6>
                        <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm leading-6">
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>NextJs</li>
                            <li>React Native</li>
                            <li>TypeScript</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>Tailwindcss</li>
                        </ul>
                    </div>
                    <div className="shadow bg-white rounded-lg p-6 transition duration-200 ease-in-out transform hover:shadow-lg">
                        <h6 className="font-bold">BACK-END</h6>
                        <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm leading-6">
                            <li>Php</li>
                            <li>Laravel</li>
                            <li>NodeJs</li>
                            <li>WordPress</li>
                            <li>Java</li>
                        </ul>
                    </div>

                    <div className="shadow bg-white rounded-lg p-6 transition duration-200 ease-in-out transform hover:shadow-lg">
                        <h6 className="font-bold">DATABASE</h6>
                        <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm leading-6">
                            <li>MySql</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Oracle</li>
                        </ul>
                    </div>

                    <div className="shadow bg-white rounded-lg p-6 transition duration-200 ease-in-out transform hover:shadow-lg">
                        <h6 className="font-bold">SOURCE CONTROLL</h6>
                        <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm leading-6">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>BitBucket</li>
                            <li>Jira</li>
                            <li>Trello</li>
                            <li>Sourcetree</li>
                        </ul>
                    </div>

                </div>


            </div>
        
        </section>
    )
}

export default Resume;
