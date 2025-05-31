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
                    <a href="/login"><button className="text-white font-bold border border-white bg-transparent hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 hover:cursor-pointer">
                        Login
                    </button></a>
                    <a href="/login"><button className="ml-2 text-white font-bold border border-white bg-transparent hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 hover:cursor-pointer">
                        User
                    </button></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
