
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
            className="min-h-screen flex justify-center items-center flex-col"
            style={{
            background: '#FEFEFE',
            }}
            id="about" 
        >
            <h1 className="text-3xl text-bookmark-blue">About Me</h1>

            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">          
                <Image src={profilePic}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl" />
            </div>
            <div
                className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
            >
                
                <p className="text-bookmark-grey mt-4">
                    Lead developer with over 20 years’ experience in IT, with a track record of delivering high quality web applications for high profile brands such as Aviva, Santander, Barclays, HSBC, TSB, Marks and Spencer and First Direct.
                </p>
                <p className="text-bookmark-grey mt-4">
                    Experience as a team lead, managing technical deliveries, coaching junior developers and setting code quality standards.
                </p>
                <p className="text-bookmark-grey mt-4">
                    Great problem solver and extremely motivated to learn new skills and technologies.
                </p>
            </div>
        </section>
    )
}

export default About;
