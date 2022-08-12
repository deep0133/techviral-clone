import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function News() {
  const [stickyRecent, setStickyRecent] = useState(" relative ");

  window.addEventListener("scroll", function run() {
    if (window.pageYOffset > 450) {
      setStickyRecent(" sticky ");
    }
    console.log(window.pageYOffset);
  });

  return (
    <>
      <div className="bg-[#f3f3f3] mt-0 pt-2 p-2">
        {/* Ad */}
        <div
          className={`head-ad-box bg-[#eaeaea] hidden md:flex justify-center items-center text-3xl font-semibold text-gray-400 rounded-lg w-[67%] h-[38vh] mb-2  mx-auto`}
        >
          Ad Box - 1
        </div>

        {/* Detail of News: */}
        <div className="detail w-full bg-white lg:w-[90%] xl:w-[80%] mx-auto px-4 py-8 md:px-6 lg:px-10 ">
          <h2 className="header w-full space-y-3">
            <div className="breadcrumb flex text-gray-500 text-xs font-semibold space-x-3">
              <NavLink className="go-to-home hover:text-blue-600" to="/">
                Home
              </NavLink>
              <p>Contact Us</p>
            </div>
          <div className="title text-2xl lg:text-3xl font-bold">
                Contact US
          </div>
          </h2>


          <div className="data relative">
            {/* Left Side */}
            <div className={`col-1`}>
              <div className="info mt-6 rounded-lg">
                <img
                  src={require("./images/about.webp")}
                  className="w-auto border-2 border-black rounded-xl"
                  alt="reload page"
                />

                <p className="text-xl tracking-wider mt-5 leading-8">
                If you have any info and difficulty on any topic or doubt in mind. Just Feel Free to Contact us at our E-Mail Address – <span className="font-semibold text-blue-500"> admin@techviral.net</span> .
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
