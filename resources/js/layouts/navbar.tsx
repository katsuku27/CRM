import React from 'react';
import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-[#172230] to-[#487D96] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <Link href="/home" className="flex items-center rtl:space-x-reverse">
                        <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
                        <span className="text-white font-bold text-xl">rcode</span>
                    </Link>

                    <div className="items-left justify-between hidden w-full md:flex md:w-auto ml-6" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link href="/home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                                    Browse
                                </Link>
                            </li>
                            <li>
                                <Link href="/wrap" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    Wrap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                    <button data-collapse-toggle="navbar-sticky" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
