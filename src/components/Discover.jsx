import React from "react";
import first_img from "../assets/images/png/monero.png";
import third_img from "../assets/images/png/tezor.png";
import joinZKlogo from "../assets/images/png/z-logo.png";
import dollor_img from "../assets/images/webp/dai-dollor.webp";
import second_img from "../assets/images/webp/flow.webp";
import z_logo from "../assets/images/png/z-logo-transparent.png";
import mobile_z_logo from "../assets/images/png/mobile-z-logo-transparent.png";
import CommonBtn from "./common/CommonBtn";
import { GradientImage, MobileGradientImage } from './common/Icons';

const Discover = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4">
        <div className="bg-white-gradient p-[1px] rounded-[32px]">
          <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 rounded-[32px] bg-firefly relative  overflow-hidden">
            <div className="absolute hidden md:flex bottom-0 end-0">
              <GradientImage/>
            </div>
            <div className="absolute md:hidden bottom-[70px] end-0">
              <MobileGradientImage/>
            </div>
            <img
              className="absolute hidden md:flex md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] w-full top-0 start-0"
              width={600}
              src={z_logo}
              alt="zklogo"
            />
            <img
              className="absolute  max-w-[200px] w-full md:hidden top-0 start-0"
              width={100}
              src={mobile_z_logo}
              alt="zklogo"
            />
            <img
              className="absolute max-w-8 sm:max-w-10 md:max-w-14 lg:max-w-16 w-full rotate-[-30deg] top-[77px] sm:start-4 md:start-[12%] -start-4 sm:top-[66px] lg:start-[22%]"
              height={64}
              width={64}
              src={first_img}
              alt="zklogo"
            />
            <img
              className="absolute max-w-[70px] sm:max-w-20 md:max-28 lg:max-w-40 rotate-[37deg] bottom-[42%] -start-[50px] sm:bottom-10 md:bottom-4 md:start-[-2%] lg:bottom-[-36px] lg:start-[2%]"
              height={160}
              width={160}
              src={second_img}
              alt="zklogo"
            />
            <img
              className="absolute max-w-[26px] w-full sm:max-w-9 md:max-14 lg:max-w-16 rotate-[-29deg] bottom-28 sm:end-4 md:bottom-16 md:end-10 -end-2 lg:bottom-[66px] lg:end-[22%]"
              height={64}
              width={64}
              src={third_img}
              alt="zklogo"
            />
            <div className="relative">
              <span className="lg:h-[130px] lg:w-[130px] h-[40px] sm:h-16 md:h-24 w-[40px] sm:w-16 md:w-24  bg-gold absolute rotate-[-26.9deg] -top-9 lg:-top-[90px] end-[13%] sm:end-[11%] blur-[33px] sm:blur-3xl md:blur-[120px] lg:blur-[140px] block"></span>
              <img
                className="absolute max-w-[50px] w-full sm:max-w-16 md:max-w-24 lg:max-w-[140px] rotate-[-26.9deg] -top-[37px] md:-top-16 lg:-top-[106px] end-[10%]"
                height={140}
                width={140}
                src={dollor_img}
                alt="zklogo"
              />
           </div>
            <div className="relative z-10 custom-2xs:px-4 px-6">
              <img
                className="max-w-[39px] sm:max-w-12 md:max-w-[70px] lg:max-w-[84px] w-full sm:mx-auto"
                height={84}
                width={77}
                src={joinZKlogo}
                alt="zklogo"
              />
              <h2 className="max-w-[1200px] custom-xs:text-3xl uppercase mx-auto text-white sm:text-center pt-6 font_actay_wide font-medium text-[40px] sm:text-5xl md:text-6xl lg:text-7xl !leading-[100%]">
                Discover freedom <br className="hidden xl:block" />
                in every transaction
              </h2>
              <p className="text-white sm:mx-auto  sm:text-center text-sm md:text-base !leading-[130%] font-manrope font-normal sm:max-w-[512px] py-4 text-opacity-60">
                Our platform offers a robust and reliable solution for anyone in
                the ecosystem. It's time to join a community where every crypto
                enthusiast can find their place
              </p>
              <div className="flex sm:justify-center mt-2 mb-6 md:mb-0">
                <CommonBtn btntext="Swap now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
