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
            <div className="grid gird-cols-1 lg:grid-cols-12">
                <div className="col-span-4">
                    <div className="mb-5 pb-5 md:mb-10 md:pb-10">
                        <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3">
                            Skills
                        </h2>
                        <ul className="mt-2 grid grid-cols-1 gap-y-9 md:grid-cols-2" role="list">
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
                    </div>
                    
                </div>
                <div className="lg:row-span-5 lg:col-span-8 lg:pl-8 lg:pb-0">
                    <div className="mb-5 pb-5 md:mb-10 md:pb-10 col-span-4">
                            <h2 className="mb-6 font-bold bg-gray-100 rounded-r-full text-2xl py-3 lg:rounded-r-none lg:rounded-l-full lg:pl-8">
                                    Experience
                            </h2>
                            <ul className="mt-2 pl-4 md:pl-0" role="list">
                                <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-14">
                                    <div className="font-bold"> Software Engineer</div>
                                    <div className="text-sm">Aviva, Norwich</div>
                                    <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Apr 2012 -Oct 2017</span></div>
                                    <div className="text-sm leading-7">
                                        <dl className="">
                                            <dt id="">
                                                Responsiblities
                                            </dt>
                                            <dd role="defination" aria-labelledby="{id}"
                                            className="ml-7 pb-2 list-item list-disc"> Application Depelment for Barclays and TSB (Aviva's External Banking Partners)</dd>
                                        </dl>
                                    </div>
                                </li>
                                <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-14">
                                    <div className="font-bold"> Software Engineer</div>
                                    <div className="text-sm">Aviva, Norwich</div>
                                    <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Apr 2012 -Oct 2017</span></div>
                                    <div className="text-sm leading-7">
                                        <dl className="">
                                            <dt id="">
                                                Responsiblities
                                            </dt>
                                            <dd role="defination" aria-labelledby="{id}"
                                            className="ml-7 pb-2 list-item list-disc"> Application Depelment for Barclays and TSB (Aviva's External Banking Partners)</dd>
                                        </dl>
                                    </div>
                                </li>
                                <li className="relative pl-8 md:ml-32 lg:ml-52 border-l border-solid border-gray-200 pb-14">
                                    {/* <i class=""></i> */}
                                    <FontAwesomeIcon icon="fas fa-circle"  className="absolute -left-2.5 h-5 w-5 text-blue-500 border-4 rounded-fill border-white transition-all duration-500 timeline-circle"/>
                                    <div className="font-bold"> Software Engineer</div>
                                    <div className="text-sm">Aviva, Norwich</div>
                                    <div className="flex ga-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:w-44 lg:-left-44"><span> Apr 2012 -Oct 2017</span></div>
                                    <div className="text-sm leading-7">
                                        <dl className="">
                                            <dt id="">
                                                Responsiblities
                                            </dt>
                                            <dd role="defination" aria-labelledby="{id}"
                                            className="ml-7 pb-2 list-item list-disc"> Application Depelment for Barclays and TSB (Aviva's External Banking Partners)</dd>
                                            <dd role="defination" aria-labelledby="{id}"
                                            className="ml-7 pb-2 list-item list-disc"> Application Depelment for Barclays and TSB (Aviva's External Banking Partners)</dd>
                                            <dd role="defination" aria-labelledby="{id}"
                                            className="ml-7 pb-2 list-item list-disc"> Application Depelment for Barclays and TSB (Aviva's External Banking Partners)</dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>

                </div>
                
            </div>
        
        </section>
    )
}

export default Resume;
