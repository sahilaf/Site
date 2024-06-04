"use client";
import { useState } from 'react';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
    const [navbar, setNavbar] = useState(false);

    const links = [
        { name: "Home", path: "#home" },
        { name: "Work", path: "#work" },
        { name: "Experience", path: "#experience" },
        { name: "Reviews", path: "#reviews" },
        { name: "Services", path: "#services" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <div>
            <nav className="w-full bg-[#0c1529] absolute top-0 left-0 right-0 z-10 backdrop-blur-2xl">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h1 className="text-2xl text-white font-bold">Dr. Shawon</h1>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-400 rounded-md "
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <RxCross2 className="text-[32px] text-white"/>
                                    ) : (
                                        <CiMenuFries className="text-[32px] text-white" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}
                        >
                            <ul className="h-96 md:h-auto items-center justify-center md:flex">
                                {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className="pb-6 text-xl text-white py-2 md:px-6 text-center hover:text-[#0070F2]"
                                    >
                                        <Link href={link.path} onClick={() => setNavbar(!navbar)}>
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MobileNav;
