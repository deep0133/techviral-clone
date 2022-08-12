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
        <div className="detail w-full bg-white lg:w-[90%] xl:w-[80%] mx-auto px-2 py-8 md:px-6 ">
          <h2 className="header w-full space-y-3">
            <div >
              <NavLink className="go-to-home text-gray-500 text-xs font-semibold" to="/">Home</NavLink>
            </div>
            <div className="title text-3xl font-semibold font-sans">
              Windows 12: Everything We know So Far Including Release Date
            </div>
            <div className="created-by text-xs text-gray-500 font-normal -my-1">
              By Himanshu Panchal - August 6, 2022
            </div>
          </h2>

          <div className="data grid grid-cols-1 md:grid-cols-12 gap-2 justify-center items-center relative">
            {/* Left Side */}
            <div className={`col-1 md:col-span-8`}>
              <div className="icons flex space-x-3">
                <span className="text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2.8em"
                    height="2.8em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    />
                  </svg>
                </span>
                <span className="text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2.8em"
                    height="2.8em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3.6 10.4.8 15.8.8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34z"
                    />
                  </svg>
                </span>
                <span className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2.8em"
                    height="2.8em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3c3-11.5 15.3-58.4 15.3-58.4c8 15.3 31.4 28.2 56.3 28.2c74.1 0 127.4-68.1 127.4-152.7c0-81.1-66.2-141.8-151.4-141.8c-106 0-162.2 71.1-162.2 148.6c0 36 19.2 80.8 49.8 95.1c4.7 2.2 7.1 1.2 8.2-3.3c.8-3.4 5-20.1 6.8-27.8c.6-2.5.3-4.6-1.7-7c-10.1-12.3-18.3-34.9-18.3-56c0-54.2 41-106.6 110.9-106.6c60.3 0 102.6 41.1 102.6 99.9c0 66.4-33.5 112.4-77.2 112.4c-24.1 0-42.1-19.9-36.4-44.4c6.9-29.2 20.3-60.7 20.3-81.8c0-53-75.5-45.7-75.5 25c0 21.7 7.3 36.5 7.3 36.5c-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                    />
                  </svg>
                </span>
                <span className="text-green-500  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2.8em"
                    height="2.8em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 6.55a12.61 12.61 0 0 0-.1-1.29a4.29 4.29 0 0 0-.37-1.08a3.66 3.66 0 0 0-.71-1a3.91 3.91 0 0 0-1-.71a4.28 4.28 0 0 0-1.08-.36A10.21 10.21 0 0 0 17.46 2H6.55a12.61 12.61 0 0 0-1.29.1a4.29 4.29 0 0 0-1.08.37a3.66 3.66 0 0 0-1 .71a3.91 3.91 0 0 0-.71 1a4.28 4.28 0 0 0-.36 1.08A10.21 10.21 0 0 0 2 6.54v10.91a12.61 12.61 0 0 0 .1 1.29a4.29 4.29 0 0 0 .37 1.08a3.66 3.66 0 0 0 .71 1a3.91 3.91 0 0 0 1 .71a4.28 4.28 0 0 0 1.08.36a10.21 10.21 0 0 0 1.28.11h10.91a12.61 12.61 0 0 0 1.29-.1a4.29 4.29 0 0 0 1.08-.37a3.66 3.66 0 0 0 1-.71a3.91 3.91 0 0 0 .71-1a4.28 4.28 0 0 0 .36-1.08a10.21 10.21 0 0 0 .11-1.28V6.55ZM12.23 19a7.12 7.12 0 0 1-3.43-.9l-3.8 1l1-3.72a7.11 7.11 0 0 1-1-3.58a7.18 7.18 0 1 1 7.23 7.2Zm0-13.13A6 6 0 0 0 7.18 15l.14.23l-.6 2.19L9 16.8l.22.13a6 6 0 0 0 3 .83a6 6 0 0 0 6-6a6 6 0 0 0-6-6Zm3.5 8.52a1.82 1.82 0 0 1-1.21.85a2.33 2.33 0 0 1-1.12-.07a8.9 8.9 0 0 1-1-.38a8 8 0 0 1-3.06-2.7a3.48 3.48 0 0 1-.73-1.85a2 2 0 0 1 .63-1.5a.65.65 0 0 1 .48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 0 1 0 .31a1.14 1.14 0 0 1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 0 0 1 1.24a5 5 0 0 0 1.44.89c.18.09.29.08.39 0s.45-.52.57-.7s.24-.15.4-.09s1.05.49 1.23.58s.29.13.34.21a1.56 1.56 0 0 1-.07.78Z"
                    />
                  </svg>
                </span>
              </div>

              <div className="info md:mr-3 mt-6 rounded-lg">
                <img
                  src={require("./images/newsImage-1.jpg")}
                  className="w-auto rounded-xl"
                  alt="reload page"
                />

                <p className="text-xl tracking-wider mt-5 leading-8">
                  A reliable tipster has leaked the upcoming Nvidia GeForce RTX
                  4080 & 4070 specs details. These specs suggest a massive
                  performance bump from the previous RTX 30-series, so let’s
                  delve into further details below.
                  <br />
                  <br />
                  As we all know, the next generation of Nvidia’s RTX graphic
                  cards is on the launch list Nvidia for this year or early next
                  year.
                  {/* Ad */}
                  <div className="ad-box flex justify-center items-center text-3xl font-semibold text-gray-400 border-2 h-[38vh] my-8  mx-auto">
                    Ad Box - 3
                  </div>
                  These specs suggest a massive performance bump from the
                  previous RTX 30-series, so let’s delve into further details
                  below. As we all know, the next generation of Nvidia’s RTX
                  graphic cards is on the launch list Nvidia for this year or
                  early next year.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className={`col-2 md:col-span-4 md:mt-24 `}>
              <div className={`top-0 ${stickyRecent} `}>
                <div className={`content top-0  w-auto mt-8 md:mt-0`}>
                  {/* Content of right side */}
                  <div className={`data bg-[#eaeaea] text-sm  rounded-lg space-y-5  flex flex-col md:w-fit px-3 py-4`}>
                    <h2 className="text-2xl font-bold">RECENT</h2>
                    <div className="card hover:text-blue-600">
                      <p className="font-semibold text-lg hover:cursor-pointer">
                        Nvidia GeForce RTX 4080 Leaked Detail Suggests Massive
                        Boost
                      </p>
                    </div>
                    <hr className="border-none h-[0.2px] bg-gray-300" />
                    <div className="card hover:text-blue-600">
                      <p className="font-semibold text-lg hover:cursor-pointer">
                        10 Best Live Wallpaper Apps for iPhone 2022 (New Apps){" "}
                      </p>
                    </div>
                    <hr className="border-none h-[0.2px] bg-gray-300" />
                    <div className="card hover:text-blue-600">
                      <p className="font-semibold text-lg hover:cursor-pointer">
                        How to Hide the Google Meet, Chat and Spaces Sidebar in
                        Gmail{" "}
                      </p>
                    </div>
                    <hr className="border-none h-[0.2px] bg-gray-300" />
                    <div className="card hover:text-blue-600">
                      <p className="font-semibold text-lg hover:cursor-pointer">
                        Xbox Series S Is Getting Little Performance Boost
                      </p>
                    </div>
                    <hr className="border-none h-[0.2px] bg-gray-300" />
                    <div className="card hover:text-blue-600">
                      <p className="font-semibold text-lg hover:cursor-pointer">
                        How to Delete All Empty Folders on Android in 2022
                      </p>
                    </div>
                  </div>
                  {/* Ad of right side */}
                  <div
                    className={`ad bg-[#eaeaea] hidden md:flex rounded-lg flex-col w-[85%] h-[75vh] justify-center mt-20 mx-auto`}
                  >
                    <h2 className="text-3xl text-gray-400 flex justify-center items-center">
                      Ad Box - 2
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
