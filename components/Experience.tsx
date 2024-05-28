import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image"; // Import next/image

const Experience = () => {
  return (
    <div className="py-20 w-full" id="services">
      <h1 className="heading text-[#0D1B3C] text-4xl font-bold text-center">
        Our <span className="text-[#0070F2]">services</span>
      </h1>

      <div className="w-full mt-12 grid md:grid-cols-6 grid-cols-2 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            // random duration will be fun, I think, maybe not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-[#0D1B3C] hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.img}
                alt={card.title}
                width={24}
                height={24}
                className="lg:w-12 md:w-6 w-6"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-lg md:text-xl lg:text-2xl font-semibold">
                  {card.title}
                </h1>
                <p className="text-start text-sm md:text-base lg:text-lg text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
