import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import menuItems from "./menu-items";
import MobileMenuItems from "./mobile-menu-items";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div>
            <nav className="bg-white">
                <div className="px-5 sm:px-6 lg:px-12 xl:px-12 2xl:px-12">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex-shrink-0">
                            <Link href="/" className="header-logo">
                                <Image
                                    className="logo"
                                    src="/logo/logo-1.svg"
                                    alt="mine-life"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="header-menus">
                                    <ul className={active ? "nav-menu active" : "flex items-baseline space-x-4 nav-menu"}>
                                        {menuItems.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={item.url} className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                                        {item.navlink}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                        <li className="mr-3">
                                            <button className='text-white font-medium font-sm btn btn-gradient btn-gradient-hover btn-medium'><Link href={"/contact-us"}>お問い合わせ</Link></button>
                                        </li>
                                        <li>
                                            <button className='text-white font-medium font-sm btn btn-gradient btn-gradient-hover btn-medium'><Link href={"/contact-us"}>ログイン</Link></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-primary-light inline-flex items-center justify-center p-2 rounded-md text-primary-color hover:bg-primary-light focus:outline-none focus:ring-2 outline-none focus:ring-offset-1 focus:ring-offset-primary-light focus:ring-primary-light "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {MobileMenuItems.map((Menu, index) => {
                                    return (
                                        <Link href={Menu.url} className='hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium'>
                                            {Menu.navlink}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    );
}

export default Nav;
