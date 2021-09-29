import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import profilePic from '../public/img/pro-bg.jpg';
import photoImg from '../public/img/photo.jpg';

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
            <div className="w-full md:w-2/5 ">
                <LazyLoadImage
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                    alt="profile"
                    className={`w-full mx-auto`}
                    effect="blur"
                    placeholderSrc=""
                />
                {/* <Image
                    src={photoImg}
                    layout="fill"
                    objectFit="contain"/>  */}
            </div>

            <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">

                <h1 className="responsive-headline text-white text-6xl">
                    <Typewriter
                        options={{
                            strings: ['ABU SAYEED', 'FULL STACK DEVELOPER'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <h3 className="text-gray-400">
                    Based in {city}. <span className="text-white">{occupation}</span>. {description}.
                    </h3>
                <hr />
                <ul className="social">{networks}</ul>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
        </div >

    )
}

export default Banner