import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0);

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full py-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden rounded-lg cursor-pointer",
              "bg-transparent rounded-xl h-full w-full"
            )}
            layout
          >
            <HoverCard card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const HoverCard = ({ card }: { card: Card }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    if (!isTouchDevice()) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isTouchDevice()) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg cursor-pointer",
        "bg-transparent rounded-xl h-full w-full"
      )}
      layout
      whileHover={!isTouchDevice() ? { scale: 1.03 } : undefined}
      onClick={handleClick} // Handle click event to toggle isHovered state
      onMouseEnter={handleMouseEnter} // Handle mouse enter for desktop hover
      onMouseLeave={handleMouseLeave} // Handle mouse leave for desktop hover
    >
      {isHovered && <SelectedCard selected={card} />}
      <BlurImage card={card} />
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-40">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid;
