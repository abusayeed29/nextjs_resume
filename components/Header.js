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
        <header style={{ background: '#091C29', }} className="font-dosis fixed top-0 w-screen z-40">
            
            <NavBar/>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
                </a>
            </p>

        </header>
    )
}

export default Header;

