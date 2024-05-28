'use client';
import React from "react";
import videoBg from "/videoBg.mp4"; 

const VideoBg = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBg;
