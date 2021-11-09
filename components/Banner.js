import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import profilePic from '../public/img/pro-bg.jpg';
import photoImg from '../public/img/photo.png';

function Banner({ data }) {

    if (data) {
        var name = data.name;
        var occupation = data.occupation;
        var description = data.description;
        var city = data.address.city;
        var networks = data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
    }


    return (
        <div 
            style={{ background: '#091C29',}}
            className="min-h-screen flex items-center justify-center"
            id="home"
        >
        {/* <Image
            src={profilePic}
            layout="fill"
            objectFit="cover" /> */}

        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
            <div className="w-full md:w-1/4">
                <LazyLoadImage
                    src="https://sayeedinfo.com/uploads/images/sayeed10.png"
                    alt="profile"
                    className={`w-full mx-auto rounded-full items-center justify-center bg-white border border-gray-100 shadow-sm`}
                    effect="blur"
                    placeholderSrc=""
                />
                {/* <div className="relative w-3/12 h-100 overflow-hidden">
                <Image
                    src={photoImg}
                    layout="fill"
                    objectFit="contain"/> 
                </div> */}
            </div>

            <div className="font-dosis w-full md:w-3/4 text-center md:text-left ">
                <h1 className="responsive-headline text-white text-6xl font-bold flex mb-2">I'm Abu Sayeed</h1>
                <h2 className="responsive-headline text-white text-6xl flex">
                     <Typewriter
                        options={{
                            strings: ['Full Stack Developer.','React/React Native.', 'Mern Stack Dev.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <h3 className="text-gray-400 mt-5">
                    Based in {city}. <span className="text-white">{occupation}</span>. {description}.
                </h3>
               
                <ul className="social">{networks}</ul>
                <button className="mt-7 text-gray-500 bg-white px-5 py-2 shadow-md rounded-full font-sm my-3            hover:shadow-xl active:scale-90 transition duration-150 hover:bg-red-500 hover:text-white"> 
                    <FontAwesomeIcon className="mx-1 w-5 font-light float-left" icon={faDownload}/> Download Resume
                </button>
            </div>
        </div>
        </div >

    )
}

export default Banner