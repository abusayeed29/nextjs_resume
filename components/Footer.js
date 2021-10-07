import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub, faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = ({data}) => {

    if (data) {
        var networks = data.social.map(function (network) {
          return (
            
              <div>
                <FontAwesomeIcon icon={network.className} size="xs" className="w-8 m-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out"/>
                {/* <i className={network.className}></i> */}
              </div>
            
          );
        });
      }


    return (
        <section 
            className="justify-center items-center py-16"
            style={{
            background: '#303030',
            }}
            id="resume" 
        >
            <div class="container mx-auto flex lg:flex-col sm:flex-col overflow-hidden md:justify-between">
                    <div className="w-50 flex m-auto text-center text-white">
                        <FontAwesomeIcon icon={faFacebook} size="xs" className="w-7 m-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out"/>
                        <FontAwesomeIcon icon={faGithub} size="xs" className="w-7 m-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out"/>
                        <FontAwesomeIcon icon={faLinkedin} size="xs" className="w-7 m-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out"/>
                        <FontAwesomeIcon icon={faInstagram} size="xs" className="w-7 m-3 cursor-pointer hover:scale-105 transform transition duration-200 ease-out"/>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400 font-light text-sm">Mady By Abu Sayeed</p>
                    </div>
            </div>
        </section>
    )
}

export default Footer;
