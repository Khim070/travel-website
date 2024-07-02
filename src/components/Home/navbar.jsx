import logo from '../../img/sour.png';
import React, { useState, useEffect, useRef } from 'react';
import { getMenuBar, getBG } from "../../Services/HomeServices.jsx";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [pullOut, setPullOut] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isToggled, setIsToggled] = useState(false);
    const [menuBar, setMenuBar] = useState([]);
    const [bG, setBG] = useState([]);

    const navlinksRef = useRef(null);
    const hamburgerRef = useRef(null);
    const layerRef = useRef(null);
    const navigate = useNavigate();

    const dragOut = () => {
        setPullOut(!pullOut);
    }

    const setActive = (section) => {
        setActiveSection(section);
    }

    const toggleNavlinks = () => {
        setIsToggled(!isToggled);
    }

    const handleLinkClick = (section) => {
        setActive(section);
        const targetElement = document.getElementById(section);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        if (!navlinksRef.current) return;

        const navlinks = navlinksRef.current;
        const links = navlinks.querySelectorAll("ul li");

        const handleToggleNavlinks = () => {
            if (isToggled) {
                navlinks.classList.add("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
                layerRef.current.classList.add("origin-top", "scale-y-100");
            } else {
                navlinks.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
                layerRef.current.classList.remove("origin-top", "scale-y-100");
            }
        };

        handleToggleNavlinks();

        links.forEach(link => {
            link.addEventListener("click", handleToggleNavlinks);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener("click", handleToggleNavlinks);
            });
        };
    }, [isToggled]);

    useEffect(() => {
        const fetchMenuBar = async () => {
            try {
                const response = await getMenuBar();
                const activeMenuBar = response.data
                    .filter(item => item.active === 1)
                    .sort((a, b) => a.orderId - b.orderId);

                setMenuBar(activeMenuBar);
            } catch (error) {
                console.error('Failed to fetch menu bar:', error);
            }
        };

        fetchMenuBar();
    }, []);

    useEffect(() => {
        const fetchBG = async () => {
            try {
                const response = await getBG();
                const activeBG = response.data
                    .filter(item => item.id === 1);

                setBG(activeBG);
            } catch (error) {
                console.error('Failed to fetch background:', error);
            }
        };

        fetchBG();
    }, []);

    const handleSignIn = () => {
        navigate('/maintenance');
    }

    return (
        <nav className={`bg-white border-gray-200 dark:bg-gray-900 ${pullOut ? 'dark:bg-gray-900 h-20' : ''}`}>
            {bG.map((item, i) => (
                <div key={i} className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3">
                        <img src={`http://localhost:8080/image/${item.logoImage}`} alt="logo" className='h-12 w-12 rounded-full' />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-3">Travel</span>
                    </a>
                    <div className='flex md:order-2 space-x-3 md:space-x-0'>
                        <button type="button" onClick={handleSignIn} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item.buttonTitle}</button>
                        <button ref={hamburgerRef} type="button" onClick={toggleNavlinks} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div ref={navlinksRef} id="navlinks" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isToggled ? 'visible scale-100 opacity-100 lg:translate-y-0' : 'hidden'}`}>
                        <ul className="flex flex-col text-xl font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {menuBar.map((item, i) => (
                            <li key={i}>
                                <a onClick={() => handleLinkClick(`${item.title}`)} className={`cursor-pointer block py-2 px-3 md:p-0 rounded ${activeSection === `${item.title}` ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>
                                    {item.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div ref={layerRef} id="navLayer" className={`${isToggled ? 'origin-top scale-y-100' : ''}`}></div>
        </nav>
    );
}

export default Navbar;