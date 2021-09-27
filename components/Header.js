import Typewriter from 'typewriter-effect';
import NavBar from "./sections/NavBar";

const Header = ({ data }) => {

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
        <header className="sticky top-0 z-50 bg-white shadow-md">
            
            <NavBar/>
            <div className="row banner">
                <div className="banner-text">
                <h1 className="responsive-headline">
                    <Typewriter
                    options={{
                        strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h1>
                <h3>
                    Based in {city}. <span>{occupation}</span>. {description}.
                </h3>
                <hr />
                <ul className="social">{networks}</ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
                </a>
            </p>

        </header>
    )
}

export default Header;

