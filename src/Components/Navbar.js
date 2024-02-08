import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className='fixed w-full z-20 top-0 bg-green-100 bg-opacity-80'>
                <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-2">
                    <img src={logo} className="h-8 ml-4" alt="Khemraj Lapcha Logo" />

                    <div className='flex md:order-2'>
                        <button onClick={toggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
                            text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200">
                            <AiOutlineMenuUnfold className='text-orange-400 text-lg' />
                        </button>
                    </div>

                    {/* Responsive Menu */}
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0
                            ${isOpen ? 'bg-orange-100 bg-opacity-70' : ''}`}>
                            <Link spy={true} to='Home' activeClass='active'>
                                <li>
                                    <div className='block py-2 pl-3 pr-3 rounded md:p-0 hover:text-orange-600 text-violet-700'>Home</div>
                                </li>
                            </Link>
                            <Link spy={true} to='Overview' activeClass='active'>
                                <li>
                                    <div className='block py-2 pl-3 pr-3 rounded md:p-0 hover:text-orange-600 text-violet-700'>About</div>
                                </li>
                            </Link>
                            <Link spy={true} to='Projects' activeClass='active'>
                                <li>
                                    <div className='block py-2 pl-3 pr-3 rounded md:p-0 hover:text-orange-600 text-violet-700'>Projects</div>
                                </li>
                            </Link>
                            <Link spy={true} to='Contact' activeClass='active'>
                                <li>
                                    <div className='block py-2 pl-3 pr-3 rounded md:p-0 hover:text-orange-600 text-violet-700'>Contact</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
