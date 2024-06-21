import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="" id="experience">
      <h1 className="heading text-[#0D1B3C]">
        <span className="text-[#0070F2]">Practice</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* PinContainer wraps each project item */}
            <PinContainer title={item.link}>
              {/* Project Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                  <Image src={item.img} alt="Project Background Image" layout="fill" objectFit="cover" />
                </div>
              </div>

              {/* Project Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-[#0D1B3C]">{item.title}</h1>

              {/* Project Description */}
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-600 mt-2">{item.des}</p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
