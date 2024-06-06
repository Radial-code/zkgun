import React, { useState } from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import joinZKlogo from "../assets/images/png/z-logo.png";
import { DextTools, JoinLeftHexagon, MediumIcon, RightCheck, Telegram, TextCopy, Twitter } from "./common/Icons";

const JoinZkgun = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "0x6873C95307e13bEB58Fb8FCdDf9a99667655c9e4";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div id="contact" className="relative">
      <div className="absolute -top-[16] -start-[500px] sm:-start-[100px] lg:-start-36 max-w-[300px] md:max-w-[400px] xl:max-w-[500px] -z-[1] hidden sm:flex">
        <JoinLeftHexagon />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 py-[30px] md:py-16 xl:py-20">
        <div className="text-center">
          <ReactParallaxTilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            className="inline-block"
          >
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              className="mx-auto max-w-[52px] sm:max-w-14 md:max-w-16 lg:max-w-20 xl:max-w-[110px]"
              width={110}
              src={joinZKlogo}
              alt="zklogo"
            />
          </ReactParallaxTilt>
        </div>
        <h2
          data-aos="fade-up"
          className="max-w-[855px] custom-2xs:text-4xl uppercase mx-auto text-white text-center pt-6 font_actay_wide font-medium text-custom-md sm:text-5xl md:custom-2md lg:text-7xl !leading-[100%]"
        >
          Join the zkGUN community
        </h2>
        <p
          data-aos="fade-right"
          className="text-white mx-auto text-center text-sm md:text-base !leading-[130%px] font-manrope font-normal max-w-[582px] py-4 text-opacity-60"
        >
          Ready for a crypto experience that actually delivers on its promise of
          freedom? zkGUN is your opportunity to join the next big thing in
          decentralized finance. Let’s change the crypto world together.
        </p>
        <div
          data-aos="fade-zoom-in"
          className="mt-2 flex justify-center gap-3 w-full"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://medium.com/@zkgun"
            className="py-[15px] px-4 sm:px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center items-center sm:w-auto bg-white cursor-pointer"
          >
            <MediumIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://t.me/zkgunproject"
            className="py-[15px] px-4 sm:px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center sm:w-auto link_gradient cursor-pointer"
          >
            <Telegram />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xd0fcb8bfe5ceff6601c4e09ce1a5b2ba96d0058c?t=1717653019543"
            className="py-[15px] px-4 sm:px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center sm:w-auto bg-white cursor-pointer"
          >
            <DextTools />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/zkgunproject"
            className="py-[15px] px-4 sm:px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center sm:w-auto link_gradient cursor-pointer"
          >
            <Twitter />
          </a>
         
        </div>
        <div className="flex flex-col sm:flex-row gap-1 sm:justify-center pt-6">
          <p className="text-white text-base sm:text-sm md:text-base font-normal font-manrope h-full text-center">Contract Address :</p>
          <div className="flex items-center gap-3 justify-center">
            <p className="text-white text-opacity-60 text-xs sm:text-sm md:text-base font-normal font-manrope h-full text-center">0x6873C95307e13bEB58Fb8FCdDf9a99667655c9e4</p>
            <button onClick={copyToClipboard} className="flex items-center gap-2">
              {copied ? <RightCheck /> : <TextCopy />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinZkgun;
