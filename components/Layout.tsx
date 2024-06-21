import React, { useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion, useAnimation } from "framer-motion";

const Layout = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
      } else {
        controls.start({ opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="h-[170vh] md:h-[130vh] py-20 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      exit={{ opacity: 0, y: 20 }}
    >
      <LayoutGrid cards={cards} />
    </motion.div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Smile Bright, Smile Right</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Your smile is your greatest asset; keep it healthy and radiant.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Teeth Are Pearls of Wisdom</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Taking care of your teeth today ensures a brighter tomorrow.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">A Healthy Mouth, A Happy Heart</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Good dental hygiene is key to overall well-being and happiness.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Brush Away Troubles, Floss Away Worries</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Daily dental care is the foundation for a lifetime of dental health and confidence.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail:
      "grid4.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "grid2.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "grid1.jpeg",},
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "grid3.jpg",},
];

export default Layout;
