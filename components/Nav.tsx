"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "experience",
    path: "#experience",
  },
  {
    name: "reviews",
    path: "#reviews",
  },
  {
    name: "services",
    path: "#services",
  },
];

const Nav = () => {
  const pathname = usePathname(); // Add this line to initialize the 'pathname' variable

  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex gap-8 text-gray-400">
      {links.map((link, index) => (
        <Link href={link.path} key={index} onClick={(e) => handleClick(e, link.path)} passHref>
          <span
            className={`${
              pathname === link.path && "text-[#0070F2] border-b-2 border-[#0070F2]"
            } capitalize font-medium hover:text-[#0070F2] transition-all cursor-pointer`}
          >
            {link.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
