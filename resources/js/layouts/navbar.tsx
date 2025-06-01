import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
    const { props }: any = usePage();
    const user = props.auth?.user;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-gradient-to-r from-[#172230] to-[#487D96] dark:border-gray-600">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                {/* Left Side: Logo, Browse, and Search */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="flex items-center rtl:space-x-reverse">
                        <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
                        <span className="ml-2 text-xl font-bold text-white">rcode</span>
                    </Link>

                    <div className="hidden items-center space-x-4 md:flex">
                        <Link href="/" className="font-medium text-white hover:text-blue-300">
                            Browse
                        </Link>

                        {/* Search Bar */}
                        <div className="relative text-white">
                            <svg
                                className="pointer-events-none absolute inset-y-0 left-3 flex h-7 w-4 items-center text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Search"
                                className="w-48 rounded-md bg-[#FFFFFF54] py-1 pr-3 pl-10 text-sm placeholder:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    {!user ? (
                        <Link href="/login">
                            <button className="rounded-lg border border-white bg-transparent px-4 py-2 text-sm font-bold text-white hover:cursor-pointer hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Button onClick={handleMenuOpen} sx={{ padding: 0, minWidth: 'unset' }}>
                                <Avatar sx={{ bgcolor: 'white', color: '#487D96' }}>
                                    {user.name.charAt(0).toUpperCase()}
                                </Avatar>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Link href="/settings/profile" className="w-full block">Profile</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link href="/admin" className="w-full block">Dashboard</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="w-full text-left"
                                    >
                                        Logout
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
