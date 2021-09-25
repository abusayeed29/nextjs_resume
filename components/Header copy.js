import { useEffect, useState } from "react";

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

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const showSideMenu = () => {
        (isMenuOpen) ? setisMenuOpen(false) : setisMenuOpen(true)
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="flex items-center flex-wrap bg-gray-800 p-3">
                <button
                    onClick={() => { showSideMenu() }}
                    className="text-white inline-flex p-3 hover: bg-gray-900 rounded lg:hidden ml-auto">
                    <i className=""></i>
                    Menu
                </button>
                {(isMenuOpen) ? SideMenu() : ''}

                <div
                    className="lg:visible sm:invisible top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation">
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#home">Home </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#about"> About </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#resume"> Resume </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#portfolio">Works</a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#testimonials">Testimonials</a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;

function SideMenu() {
    console.log('hekllo');
    return (
        <div className="fixed h-screen w-1/4 bg-gray-900 top-8">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#home">Home </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#about"> About </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#resume"> Resume </a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#portfolio">Works</a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#testimonials">Testimonials</a>
                        <a className="smoothscroll lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-gray-900" href="#contact">Contact</a>
                    </div>

        </div>
    )
}
