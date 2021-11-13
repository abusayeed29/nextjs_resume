
import Image from 'next/image';

import profilePic from '../public/img/profilepic.jpg';
import profilesyd from '../public/img/sayeed-pic.png';

const About = ({ data }) => {
    
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
            className="justify-center items-center py-24"
            style={{
            background: '#ebeeee',
            }}
            id="about" 
        >
        <div className="container mx-auto flex lg:flex-row flex-col overflow-hidden md:justify-between">
            <div className="relative mb-2 w-3/12 flex">          
                <Image src="https://sayeedinfo.com/uploads/images/sayeed2.png"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-sm h-24 w-24 items-center justify-center p-8 m-10" />
            </div>
            <div
                className="flex flex-col w-9/12 text-sm text-gray-800 ml-10"
            >
                <h1 className="text-3xl text-bookmark-blue">About Me</h1>
                <p className="text-bookmark-grey mt-4">
                    As a Full Stack Developer, I have the skills needed to both create a smooth, attractive user experience and a secure and scalable codebase.
                </p>
                <p className="text-bookmark-grey mt-4">
                    Experience as a team lead, managing technical deliveries, coaching junior developers and setting code quality standards. Great problem solver and extremely motivated to learn new skills and technologies.
                </p>
                <h2 className="text-lg font-2xl mt-5">Contact Details</h2>

                <div className="flex">
                    
                    <p className="address">
                        <span>{name}</span>
                        <br />
                        <span>
                        {street}
                        <br />
                        {city} {state}, {zip}
                        </span>
                        <br />
                        <span>{phone}</span>
                        <br />
                        <span>{email}</span>
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About;
