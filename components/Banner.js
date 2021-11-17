import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import DownloadButton from "./sections/DownloadButton";

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
            className="min-h-screen flex items-center justify-center px-3"
            id="home"
        >

        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
            <div className="w-full md:w-1/4">
                {/* <LazyLoadImage
                    src="https://api.sayeedinfo.com/uploads/images/sayeed1.png"
                    alt="profile"
                    className={`w-1/2 lg:w-full mx-auto rounded-full items-center justify-center bg-white border border-gray-100 shadow-sm`}
                    effect="blur"
                    placeholderSrc=""
                    threshold="100"
                /> */}
                <div className="relative w-8/12 lg:w-full h-100 overflow-hidden mx-auto">
                <Image
                    src="https://api.sayeedinfo.com/uploads/images/sayeed1.png"
                    width={500}
                    height={500}
                    className={`object-cover h-48 w-full rounded-full bg-white items-center justify-center border border-gray-100 shadow-sm`}
                    /> 
                </div>
            </div>

            <div className="font-dosis w-full md:w-3/4 md:text-left">
                <h1 className="responsive-headline text-white text-3xl lg:text-6xl font-bold flex mb-2 justify-center lg:justify-start">I'm Abu Sayeed</h1>
                <h2 className="responsive-headline text-white text-3xl lg:text-6xl flex justify-center lg:justify-start">
                     <Typewriter
                        options={{
                            strings: ['Full Stack Developer.','React/Next.js', 'React Native'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <h3 className="text-gray-400 mt-5">
                    Based in {city}. <span className="text-white">{occupation}</span>. {description}.
                </h3>
               
                <ul className="social">{networks}</ul>

                <DownloadButton/>
            </div>
        </div>
        </div >

    )
}

export default Banner