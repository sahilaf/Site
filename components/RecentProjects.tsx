import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="" id="experience">
      <h1 className="heading text-[#0D1B3C]">
        Practice <span className="text-[#0070F2]">Location </span>& Consultation <span className="text-[#0070F2]">Hours</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-96 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-[216px]"
            key={item.id}
          >
            <PinContainer title={item.link}>
              <div className="relative flex items-end justify-start w-[350px] md:w-[500px] overflow-hidden md:h-[46vh] h-[36vh]  rounded-2xl">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image src={item.img} alt="Project Background Image" layout="fill" objectFit="cover" className="brightness-50" />
                </div>
                {/* Content */}
                <div className="relative z-10 p-6 text-left">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">{item.title}</h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white mt-2">{item.des}</p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
