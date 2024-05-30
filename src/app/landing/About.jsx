"use client";
import React from "react";
import { Element } from "react-scroll";
import AboutCard from "./AboutCard";
import { ShareSVG, CareerSVG, SupportSVG } from "./SVGIcon";

const About = () => {
  return (
    <Element
      className="flex flex-col justify-center items-center py-[1.5rem] px-0 gap-[2.25rem]"
      name="whyJoinUs"
    >
      <div className="flex flex-col justify-center items-center gap-[0.25rem]">
        <h2 className=" text-[#222] heading-2 text-center">Why Join Us</h2>
        <p className="text-[#5D5D5D] text-center body-text">
          Bridging the gap between fellow alumni and current students in the
          computing department
        </p>
      </div>
      <div className="flex w-full py-0 px-[2.5rem] justify-center items-center gap-[4.75rem]">
        <AboutCard
          aboutSVG={<ShareSVG />}
          aboutTitle={"Share and Engage"}
          aboutContent={"Post insights, experiences, and multimedia content"}
          aboutLink={"Share now "}
        />
        <AboutCard
          aboutSVG={<CareerSVG />}
          aboutTitle={"Career Opportunities"}
          aboutContent={"Explore job postings curated specifically for you."}
          aboutLink={"Join now "}
        />
        <AboutCard
          aboutSVG={<SupportSVG />}
          aboutTitle={"Support"}
          aboutContent={"Contribute to departmental initiatives."}
          aboutLink={"Join now  "}
        />
      </div>
    </Element>
  );
};

export default About;
