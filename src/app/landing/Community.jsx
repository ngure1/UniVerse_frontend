import React from "react";

const Community = () => {
  return (
    <div className="flex pt-6 pb-0 flex-col gap-9 items-center justify-center">

      <div className="flex flex-col justify-center items-center gap-1">
        <p className="heading-2">Our community</p>
        <p className="body-text text-center colou">Meet some of our active members</p>
      </div>

      <div className="flex w-[90rem] px-[0rem] py-[6.25rem] justify-center items-center gap-[5.25rem] ">

        <div className="flex w-[31.25rem] items-center gap-4 flex-shrink-0">

          {/* image */}
          <div className="w-[8.25rem] h-[8.25rem]  flex-shrink-0 rounded-[8.25rem]  bg-gradient-to-r from-cyan-500 to-blue-500"></div>

          <div className="flex flex-col justify-center items-start gap-3 self-stretch flex-1">
            <div className="flex flex-col items-start">
              <p className="body-text text-center">Jane Doe</p>
              <p className="body-text text-center">Alumni class of '05</p>
            </div>

            <p className="self-stretch body-text">
              This platform has helped me connect with my fellow alumni and find
              jobs.
            </p>
          </div>
        </div>

        <div className="flex w-[31.25rem] items-center gap-4 flex-shrink-0">

          {/* image */}
          <div className="w-[8.25rem] h-[8.25rem]  flex-shrink-0 rounded-[8.25rem]  bg-gradient-to-r from-cyan-500 to-blue-500"></div>

          <div className="flex flex-col justify-center items-start gap-3 self-stretch flex-1">
            <div className="flex flex-col items-start">
              <p className="body-text text-center">John Doe</p>
              <p className="body-text text-center">Current Student</p>
            </div>

            <p className="self-stretch body-text">
              This platform has helped me connect with my fellow alumni and find
              jobs.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Community;
