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
              <p>About Us</p>
            </div>
          <div className="title text-2xl lg:text-3xl font-bold">
                ABOUT US
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
                  <strong>TechViral</strong> is one of the fastest-growing tech
                  media startups in India. Tech Viral is an all-rounder in the
                  tech field. We work hard to serve you first and, best of all
                  and satisfy your hunger for Technology. Here you will be
                  updated with the latest tech news, tech tutorials, hacking
                  news, latest vulnerabilities, and more.
                  <br />
                  <br />
                  Tech Viral now draws over 4 million page views per month. Tech
                  Viral has a strong social media presence with more than 2
                  million followers and sends timely updates to its 20 thousand
                  e-mail subscribers.
                  <br />
                  <br />
                  To meet the people that make Tech Viral a fun place to work,
                  check out our{" "}
                  <span className="font-semibold text-blue-500">Team page</span>
                  . Thanks To all users and followers who supported us to move
                  ahead.
                  <br />
                  <br />
                  If you wish to be a part of our highly influential media
                  platform with a dev and design team building new and awesome
                  technology products, read our{" "}
                  <span className="font-semibold text-blue-500">
                    {" "}
                    Jobs page
                  </span>{" "}
                  .
                  <br />
                  <br />
                  If you require any more information or have any questions
                  regarding Tech Viral, please feel free to{" "}
                  <span className="font-semibold text-blue-500">
                    contact us
                  </span>{" "}
                  by dropping your email at{" "}
                  <span className="font-semibold text-blue-500">
                    admin@techviral.net
                  </span>{" "}
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
