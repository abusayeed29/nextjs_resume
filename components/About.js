
import Image from 'next/image';
import useWindowPosition from '../hook/useWindowPosition';
import profilePic from '../public/img/profilepic.jpg';
import profilesyd from '../public/img/sayeed-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = ({ data }) => {

    const animated = useWindowPosition('header', 0.6);

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
            <div className="mx-auto relative w-3/12 overflow-hidden mb-2 border-8 border-white border-solid h-52 w-52 rounded-full shadow-xl">          
                <Image src="https://sayeedinfo.com/uploads/images/sayeed.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full h-24 w-24 flex items-center justify-center p-8 m-10" />
            </div>
            <div
                className="flex flex-col w-9/12 text-sm text-gray-800 ml-10"
            >
                <h1 className="text-3xl text-bookmark-blue">About Me</h1>
                
                <p className="text-bookmark-grey mt-4">
                    Lead developer with over 6 years’ experience in IT, with a track record of delivering high quality web applications for high profile brands such as Aviva, Santander, Barclays, HSBC, TSB, Marks and Spencer and First Direct.
                </p>
                <p className="text-bookmark-grey mt-4">
                    Experience as a team lead, managing technical deliveries, coaching junior developers and setting code quality standards.
                </p>
                <p className="text-bookmark-grey mt-4">
                    Great problem solver and extremely motivated to learn new skills and technologies.
                </p>
                <h2 className="text-lg font-2xl mt-5">Contact Details</h2>
                <div className="flex lg:flex-row gap-10 flex-col">
                    
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
                    <button className="h-10 mt-7 text-gray-500 bg-white px-5 shadow-md rounded-full font-sm my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:bg-red-500 hover:text-white"> 
                        <FontAwesomeIcon className="mx-1 w-5 font-light float-left" icon={faDownload}/> Download Resume
                    </button>
            
              </div>
            </div>
        </div>
        </section>
    )
}

export default About;
