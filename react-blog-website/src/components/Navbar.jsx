import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaLinkedin, FaInstagram, FaTwitter, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/services', link: 'Community' },
        { path: '/about', link: 'About' },
        { path: '/blogs', link: 'Blogs' },
    ];

    return (
        <header className='bg-gray-500 text-white fixed top-0 left-0 right-0 z-50'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <img src="/e.png" alt="eigen" className='w-24' />

                {/* Desktop Navigation */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map(({ path, link }) => (
                        <li className='font-semibold text-white' key={path}> {/* Font bold and white color */}
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active' : isPending ? 'pending' : ''
                                }
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className='font-bold text-black lg:flex gap-4 items-center hidden'>
                    <a href="https://www.linkedin.com/company/linkedin-com-in-eigen-9694272a7/" className='font-bold hover:text-white'>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_eigen__" className='hover:text-white'>
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/_eigen_" className='hover:text-white'>
                        <FaTwitter />
                    </a>
                    <button className='bg-black px-6 py-2 font-medium text-white rounded hover:bg-white hover:text-black transition-all duration-200 ease-in'>
                        <a href="https://forms.gle/KoNB3ThsN63iMwTy5">Join</a>
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className='md:hidden text-white text-3xl z-50 relative' // Changed to text-white for white color
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu Items */}
            <ul
                className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 bg-gray-500 ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150 z-40' : 'hidden'}`}
                style={{ marginTop: 0 }} // Ensure top margin is set to 0
            >
                {navItems.map(({ path, link }) => (
                    <li className='font-bold text-white' key={path}> {/* Font bold and white color */}
                        <NavLink onClick={toggleMenu} to={path}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navbar;
