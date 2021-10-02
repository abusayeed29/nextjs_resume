
import Image from 'next/image';
import useWindowPosition from '../hook/useWindowPosition';
import profilePic from '../public/img/profilepic.jpg';

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
        <div class="container mx-auto flex lg:flex-row sm:flex-row overflow-hidden md:justify-between">
            <div className="relative items-center w-3/12 mr-10 overflow-hidden mb-2 border-8 border-white border-solid h-52 w-52 rounded-full shadow-xl">          
                <Image src={profilePic}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full h-24 w-24 flex items-center justify-center p-6 m-10" />
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
                <h2>Contact Details</h2>
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
                <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
        </div>
        </section>
    )
}

export default About;
