import React from "react";

export default function AboutCard ({ aboutSVG, aboutTitle, aboutContent, aboutLink}) {
    return (
            <div className="w-[31.5rem] h-[16rem] flex flex-col px-[2.125rem] py-[1.125rem] items-center gap-[1rem] rounded-[0.5rem] border border-solid border-[#00B595] bg-white shadow-xl">
                <div className="flex flex-col gap-[0.5rem] self-stretch items-center">
                    {aboutSVG}
                    <p className="sub-heading-2">{aboutTitle}</p>
                </div>
                <p className="text-[#5D5D5D] w-[18.75rem] text-center body-text">
					{aboutContent}
				</p>
				<p className="text-[#5D5D5D] body-underline">
					<a href="./login" >{aboutLink} &#x3E;</a>
				</p>
            </div>
    )
}