"use client"; // Add this line to make the component a Client Component

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const links = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Services", href: "#services" },
  { title: "Reviews", href: "#reviews" },
  { title: "Contact", href: "#contact" },
];

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!menuOpen ? (
        <RiMenu3Fill
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-end z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={() => setMenuOpen(false)}
          ></div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative flex flex-col justify-between p-8 h-screen box-border bg-[#0D1B3C] z-50"
          >
            <RxCross2
              className="text-2xl cursor-pointer absolute top-4 right-4 mx-5 mt-6 text-white"
              onClick={() => setMenuOpen(false)}
            />
            <div className="flex gap-2 flex-col mt-32 ml-6 mr-32">
              {links.map((link, i) => {
                const { title, href } = link;
                return (
                  <div
                    key={`b_${i}`}
                    className="perspective-150 origin-bottom mb-4"
                  >
                    <motion.div
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <a
                        href={href}
                        className="no-underline text-white text-4xl"
                        onClick={() => setMenuOpen(false)}
                      >
                        {title}
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
