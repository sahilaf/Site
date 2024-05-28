import { FaLocationArrow, FaClock, FaPhone } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"; // Import next/image
import Pic from "../public/Asset 1.png";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section id="home" className="h-full">
      <div className="container mx-auto h-full -mt-5 xl:-mt-20">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TextGenerateEffect
              words="Consult your dental health issue"
              className="text-center md:text-left text-[30px] md:text-5xl lg:text-6xl text-[#0D1B3C]"
            />

            <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gray-400 font-semibold">
              Hi! I&apos;m Dr. Shaidul Hoque Shawon, Dental Surgeon.
            </p>
            <div className="flex justify-center lg:justify-start">
              <div>
                <a href="#contact">
                  <MagicButton
                    title="Contact now"
                    icon={<FaPhone />}
                    position="right"
                  />
                </a>
              </div>

              <div className="mt-1 ml-3 md:mt-11">
                <Socials
                  containerStyles="flex gap-3"
                  iconStyles="w-10 h-10 border border-gray-400 rounded-full flex justify-center items-center text-gray-400 text-base hover:bg-[#0070F2] hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-3 xl:mb-0 relative w-[300px] h-[300px] xl:w-[600px] xl:h-[600px]">
            <Image
              src={Pic}
              alt="Dr. Shaidul Hoque Shawon"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="xl:pb-10 flex flex-row justify-center mt-4 xl:mt-0 text-base md:text-xl">
        <div className="pr-10 md:pr-20 text-right border-r-2 border-gray-400 text-gray-400">
          <div className="flex items-center justify-end space-x-2">
            <FaClock className="text-lg" />
            <div>
              <h3 className="font-semibold">Working hours</h3>
              <h2>Sat-Thu</h2>
              <h2>4pm-9pm</h2>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-20 text-left text-gray-400">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-lg" />
            <div>
              <h3 className="font-semibold">Emergency </h3>
              <h3>Service</h3>
              <h2>012323813</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
