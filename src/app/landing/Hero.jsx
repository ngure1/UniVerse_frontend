"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element
      name="Home"
      className="relative flex flex-col justify-center items-center w-full h-[44.25rem] py-[3.25rem] px-0 gap-[3.25rem] shrink-0"
    >
      
        <video
          src="./videoBg.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-[44.25rem] object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute heading-1 text-white text-center">
          <h1 className="heading-1  text-center self-stretch text-[#00BD9D] font-nico-moji">
            UniVerse
          </h1>

          <div className="text-center">
            <p className="sub-heading-2">Welcome to JKUAT alumni connect.</p>
            <p className="sub-heading-2">
              Your hub for networking collaboration and career growth.
            </p>
          </div>
        </div>
        <div className="flex gap-[3.125rem] absolute bottom-[10rem]">
          <Button
            variant="outline"
            className="flex py-[0.625rem] px-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] border border-solid border-radius-[0.625rem] border-primary-subtle-bg bg-transparent "
          >
            <img
              src="./images/googleLogo.png"
              alt="Google Logo"
              className="w-[1.875rem] h-[1.875rem]"
            />
            <span className="text-white body-text normal-case">Continue with Google</span>
          </Button>
        </div>
    </Element>
  );
};

export default Hero;
