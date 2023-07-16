import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// comment it if you are fetching api from database:
import json from "../Data.json";

export default function News(props) {
  const [stickyRecent, setStickyRecent] = useState("relative");
  const [pageNumber, setPageNumber] = useState([1, 2, 3]);
  const [spinner, setSpinner] = useState(false);
  const [activePageButton, setActivePageButton] = useState(1);

  window.addEventListener("scroll", function run() {
    if (window.scrollY > 185) {
      setStickyRecent(" sticky ");
    }
  });

  const handleChangePage = (value) => {
    setActivePageButton(value);
    updateNews(value);
  };

  const handleChangePageNumber = (value) => {
    if (value === "forword") {
      if (pageNumber[2] !== 36) {
        setPageNumber([
          pageNumber[0] + 3,
          pageNumber[1] + 3,
          pageNumber[2] + 3,
        ]);
      }
    } else {
      if (pageNumber[0] !== 1) {
        setPageNumber([
          pageNumber[0] - 3,
          pageNumber[1] - 3,
          pageNumber[2] - 3,
        ]);
      }
    }
  };

  const updateNews = async (pageNo) => {
    setSpinner(true);
    await props.setNewsData({
      article: json.articles,
      totalResult: json.totalResults,
    });
    setSpinner(false);
  };

  useEffect(() => {
    updateNews(0);
  }, []);

  useEffect(() => {}, [props.newsData]);

  return (
    <>
      <div className="bg-[#f3f3f3]  mt-0 pt-2">
        {/* Ad */}
        <div
          className={`head-ad-box bg-[#eaeaea] hidden md:flex justify-center items-center text-3xl font-semibold text-gray-400 rounded-lg w-[67%] h-[38vh] mb-2  mx-auto`}>
          Ad Box - 1
        </div>

        <div className=" mx-auto">
          <div className="data bg-white  md:w-[95%] lg:w-[1022px] xl:w-[80%]  mx-auto py-5 px-[18px]">
            <h2 className="header">
              <div className="breadcrumb text-xs font-semibold rounded-md w-full">
                <ol className="list-reset flex">
                  <li>
                    <NavLink
                      to="/"
                      className="text-gray-400 hover:text-blue-700">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <span className="text-gray-400 mx-2"></span>
                  </li>
                  <li>
                    <p className="text-gray-400">{props.breadcrumb}</p>
                  </li>
                </ol>
              </div>
              <div className="font-semibold lg:font-bold  text-3xl  xl:text-5xl">
                {props.breadcrumb}
              </div>
            </h2>

            {/* Latest News */}
            <div className="latest-content grid grid-cols-1 md:grid-cols-12 gap-0 mt-4 relative ">
              {/* Left Side */}

              <div className="col-1 md:col-span-8 relative ">
                {props.newsData.article ? (
                  spinner ? (
                    <div class="flex justify-center items-center">
                      <div
                        class="spinner-border animate-spin inline-block w-8 h-8 border-4  border-black border-b-white rounded-full"
                        role="status">
                        <span class="visually-hidden"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="content relative  space-y-5">
                      {props.newsData.article.length <= 0
                        ? ""
                        : props.newsData.article.map((ele) => {
                            return (
                              <div
                                key={ele.url}
                                className="card grid grid-cols-12 gap-2 sm:gap-3  align-baseline md:mr-3 hover:text-blue-600">
                                <div className="img col-span-4 xs:col-span-3  -mt-1 sm:mt-[-8px] md:mt-1">
                                  <a href={ele.url}>
                                    <img
                                      src={ele.urlToImage}
                                      className="w-full rounded-2xl  p-2 md:p-0"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="col-span-8 xs:col-span-9 mr-2 md:mt-1">
                                  <NavLink to="/detail">
                                    <p className="text-sm sm:text-[22px] tracking-wide leading-6  md:text-sm lg:text-xl  font-bold hover:cursor-pointer">
                                      {ele.title}
                                    </p>
                                  </NavLink>
                                  <p className="time text-gray-600 text-xs mt-1">
                                    {ele.publishedAt}
                                  </p>
                                  <p className="description hidden md:block text-gray-500 text-[13px] my-3">
                                    {ele.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  )
                ) : (
                  <div class="flex justify-center items-center">
                    <div
                      class="spinner-border animate-spin inline-block w-8 h-8 border-4  border-black border-b-white rounded-full"
                      role="status">
                      <span class="visually-hidden"></span>
                    </div>
                  </div>
                )}

                <div className="pagination mt-16 ">
                  <div className="flex justify-center">
                    <div className="page">
                      <ul className="flex list-style-none space-x-3">
                        <li
                          onClick={() => {
                            handleChangePageNumber("back");
                          }}
                          className={`page-item ${
                            pageNumber[0] === 1
                              ? "hover:cursor-not-allowed"
                              : "hover:cursor-pointer"
                          } border-2 w-10 font-semibold text-center hover:bg-[#666] hover:text-white`}>
                          <p className="page-link relative block py-1.5 px-3 rounded focus:shadow-none">
                            <span aria-hidden="true">&laquo;</span>
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            handleChangePage(pageNumber[0]);
                          }}
                          className={`page-item border-2 w-10 font-semibold text-center  ${
                            activePageButton === pageNumber[0]
                              ? "hover:bg-blue-500 bg-blue-500 hover:text-white text-white "
                              : "hover:bg-[#666] hover:text-white"
                          } `}>
                          <a
                            className="page-link relative block py-1.5 px-3 outline-none  rounded focus:shadow-none"
                            href="#"
                            // onClick={()=>{nextPage(2)}}
                          >
                            {pageNumber[0]}
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            handleChangePage(pageNumber[1]);
                          }}
                          className={`page-item border-2 w-10 font-semibold text-center  ${
                            activePageButton === pageNumber[1]
                              ? "hover:bg-blue-500 bg-blue-500 hover:text-white text-white "
                              : "hover:bg-[#666] hover:text-white"
                          } `}>
                          <a
                            className={`page-link relative block py-1.5 px-3 outline-none rounded focus:shadow-none`}
                            href="#">
                            {pageNumber[1]}
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            handleChangePage(pageNumber[2]);
                          }}
                          className={`page-item border-2 w-10 font-semibold text-center  ${
                            activePageButton === pageNumber[2]
                              ? "hover:bg-blue-500 bg-blue-500 hover:text-white text-white "
                              : "hover:bg-[#666] hover:text-white"
                          } `}>
                          <a
                            className="page-link relative block py-1.5 px-3 outline-none rounded focus:shadow-none"
                            href="#">
                            {pageNumber[2]}
                          </a>
                        </li>
                        <li className="page-item mt-2 w-10 font-semibold text-center">
                          ...
                        </li>
                        <li
                          onClick={() => {
                            handleChangePageNumber("forword");
                          }}
                          className={`page-item ${
                            pageNumber[2] === 36
                              ? "hover:cursor-not-allowed"
                              : "hover:cursor-pointer"
                          } border-2 w-10 font-semibold text-center hover:bg-[#666] hover:text-white`}>
                          <p className="page-link relative block py-1.5 px-3 rounded focus:shadow-none">
                            <span aria-hidden="true">&raquo;</span>
                          </p>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-600 text-center pt-3 font-semibold">
                        {" "}
                        Page {activePageButton} is selected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className={`col-2 md:col-span-4 relative`}>
                <div className={`${stickyRecent} top-0`}>
                  <div className="content w-auto relative">
                    {/* Content of right side */}
                    <div className="data bg-[#eaeaea] text-sm mt-10 md:mt-0  rounded-lg space-y-5  flex flex-col md:w-fit px-3 py-4">
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
                          How to Hide the Google Meet, Chat and Spaces Sidebar
                          in Gmail{" "}
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
                      className={`ad bg-[#eaeaea] hidden md:flex rounded-lg flex-col w-[85%] h-[75vh] justify-center mt-20 mx-auto`}>
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
      </div>
    </>
  );
}
