import { FaLocationArrow, FaClock, FaPhone } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"; // Import next/image
import Pic from "../public/Asset 1.png";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section id="home" className="h-full mt-16">
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
            <div className="flex justify-center md:justify-start">
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

            <div className="xl:pb-10 flex flex-row justify-evenly md:justify-start mt-10 text-base md:text-xl ">
              <div className=" text-left text-gray-400 mr-4">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <FaClock className="text-xl text-[#0070F2] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#0D1B3C]">Working hours</h3>
                    <h2>Sat-Thu(4.30 pm - 9.00 pm)</h2>
                  </div>
                </div>
              </div>
              <div className=" text-left text-gray-400 ">
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <FaPhone className="text-xl text-[#0070F2] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#0D1B3C]">Emergency Service</h3>
                    <h3> (01755698087)</h3>
                  </div>
                </div>
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
    </section>
  );
};

export default Hero;
