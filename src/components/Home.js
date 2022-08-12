import React, { useState, useEffect } from "react";
import phone1 from "./images/phone1.jpg";
import phone2 from "./images/phone-2.jpg";
import phone3 from "./images/phone-3.jpg";

// comment it if you are fetching api from database:
import json from '../Data.json'

import { NavLink } from "react-router-dom";

export default function Home(props) {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [fixHeadline, setFixHeadline] = useState("relative");
  const [page, setPage] = useState(0);
  const [disable, setDisable] = useState(false);

  window.addEventListener("scroll", function run() {
    if (window.pageYOffset > 400) {
      setFixHeadline("sticky");
    }
  });

  
  const updateNews = async (pageNo) => {
    console.log("News Updateing...");

    // let data = "";
    // let json = "";

    // show more : button disable 
    if(page == -1){
      setDisable(true);
    }

    else{
      // data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}&page=${pageNo}&pageSize=10`);
      // json = await data.json();
      
    if(!props.newsData.article){
      // News store in state:
      await props.setNewsData({
        article: json.articles,
        totalResult: json.totalResults,
      });
    }
    else{
       // News store in state:
       await props.setNewsData({
        article: [...props.newsData.article, ...json.articles],
        totalResult: json.totalResults,
      });
    }
    }

  };

  useEffect(() => {
    updateNews(page + 1);
    setPage(page+1)
  }, []);


  return (
    <>
      <div className="bg-[#f3f3f3]">
        <div className="Body-images grid md:grid-cols-3">
          <div
            className="min-w-fit h-[28rem] bg-center bg-cover relative hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url(${phone1})`,
            }}
          >
            <div className="content absolute bottom-6 font-bold text-white font-serif mx-5">
              <h3 className="tag bg-[#3c3838] text-xs w-fit p-1 mb-2">
                GADGETS
              </h3>
              <NavLink to="detail" className="hover:text-green-500">iPhone 14’s Base Model Reportedly Priced at $799</NavLink>
            </div>
          </div>
          <div
            className="min-w-fit h-[28rem] bg-center bg-cover relative hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url(${phone2})`,
            }}
          >
            <div className="content absolute bottom-6 font-bold text-white font-serif mx-5">
              <h3 className="tag bg-[#3c3838] text-xs w-fit p-1 mb-2">
                GADGETS
              </h3>
              <NavLink to="detail" className="hover:text-green-500">OnePlus 10T 5G Launched Globally, Check Out All Details</NavLink>
            </div>
          </div>
          <div
            className="min-w-fit h-[28rem] bg-center bg-cover relative hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url(${phone3})`,
            }}
          >
            <div className="content absolute bottom-6 font-bold text-white font-serif mx-5">
              <h3 className="tag bg-[#3c3838] text-xs w-fit p-1 mb-2">
                GADGETS
              </h3>
              <NavLink to ="detail"  className="hover:text-green-500"> Samsung Galaxy Foldable Could Come With Different Name</NavLink>
            </div>
          </div>
        </div>

        <div className="latest-content bg-white grid grid-cols-1 md:grid-cols-12 gap-0 w-full lg:w-[90%] xl:w-[80%] mx-auto mt-14 py-5 relative">
          <div className="col-1 md:col-span-8 pl-5 pr-2 py-5 relative">
            <h2 className="header flex justify-center items-center font-bold text-2xl relative">
              <div>LATEST</div>
              <div className="h-[2px] mx-5 bg-[#f5f5f5]  w-full"></div>
            </h2>

            {props.newsData.article?
            <div className="content relative mt-8 space-y-5">
              
               {props.newsData.article.map((ele)=>{
                return (
                  <div key={ele.url} className="card grid grid-cols-12 gap-4 hover:text-blue-600">
                  <div className="img col-span-3">
                    <a href={ele.url} ><img
                      src={ele.urlToImage}
                      className="w-full rounded-lg"
                      alt=""
                    /></a>
                  </div>
                  <NavLink to="/detail" className="col-span-9">
                    <p className="title text-sm xs:text-xl md:text-2xl font-bold hover:cursor-pointer">
                      {ele.title}
                    </p>
                    <p className="time text-gray-600 text-xs mt-2">
                      {ele.publishedAt}
                    </p>
                  </NavLink>
                </div>
                )
               })}

           


            </div> 
            : <div>Network Error : Reload Page </div>

            }

            <div className="btn flex justify-center">
              <button onClick={()=>{ console.log("button clicked : "+page); updateNews(page + 1); setPage( props.newsData.totalResult - 18 > props.newsData.article.length ? page + 1 : -1) }} disabled={disable} className={`show-more-btn ${disable?"cursor-not-allowed hover:bg-gray-500 ":"hover:cursor-pointer hover:bg-blue-400 "}  flex justify-center items-center uppercase md:text-sm text-[14px] font-semibold bg-black text-white px-4 py-2 outline-none border-none rounded-3xl mt-12`}>
                <span>Load More</span> 
                <span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                </span>
              </button>
            </div>
          </div>

          <div className={`col-2 md:col-span-4 m-6 md:m-0 relative`}>
            <div className={`${fixHeadline} top-0 bottom-0`}>
              <div
                className={`icons flex space-x-2 sm:space-x-0 md:space-x-0 lg:space-x-3 xl:space-x-5 items-baseline`}
              >
                <span className="shrink-0  w-auto px-4 py-3">
                  <svg
                    className=" hover:cursor-pointer hover:text-blue-900"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                    />
                  </svg>
                </span>
                <span className="shrink-0 w-auto px-4 py-3">
                  <svg
                    className=" hover:cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                    />
                  </svg>
                </span>
                <span className="shrink-0  w-auto px-4 py-3">
                  <svg
                    className="hover:cursor-pointer hover:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6l5.207 3.005l-5.212 2.995z"
                    />
                  </svg>
                </span>
                <span className="shrink-0 w-auto px-4 py-3">
                  <svg
                    className=" hover:cursor-pointer hover:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                    />
                  </svg>
                </span>
              </div>

              <div className="content w-auto relative mt-8 md:mt-0">
                <h2 className="header flex justify-center items-center font-bold text-2xl my-6 md:my-0 md:mt-4 relative">
                  <div>TRANDING</div>
                  <div className="h-[2px] mx-5 bg-[#f5f5f5] w-full"></div>
                </h2>

                <div className="data bg-[#eaeaea] text-sm md:mr-4 md:mt-4  rounded-lg space-y-5  flex flex-col md:w-fit px-3 py-4">
                  <div className="card hover:text-blue-600">
                    <span className="text-xs text-blue-600 mb-1">
                      <a href="#">ANDROID</a>
                    </span>
                    <p className="font-semibold text-lg hover:cursor-pointer">
                      OnePlus Nord Buds CE Launched in India with 20 Hour
                      Battery Life
                    </p>
                  </div>
                  <hr className="border-none h-[0.2px] bg-gray-300" />
                  <div className="card hover:text-blue-600">
                    <span className="text-xs text-blue-600 mb-1">
                      <a href="#">COMPUTER</a>
                    </span>
                    <p className="font-semibold text-lg hover:cursor-pointer">
                      How to Download & Install Windows 11 On PC/Laptop
                    </p>
                  </div>
                  <hr className="border-none h-[0.2px] bg-gray-300" />
                  <div className="card hover:text-blue-600">
                    <span className="text-xs text-blue-600 mb-1">
                      <a href="#">GAMING</a>
                    </span>
                    <p className="font-semibold text-lg hover:cursor-pointer">
                      10 Best Team Management Apps For Android 2022
                    </p>
                  </div>
                  <hr className="border-none h-[0.2px] bg-gray-300" />
                  <div className="card hover:text-blue-600">
                    <span className="text-xs text-blue-600 mb-1">
                      <a href="#">HOW TO</a>
                    </span>
                    <p className="font-semibold text-lg hover:cursor-pointer">
                      How to Change Default Start Page of Windows 11 Task
                      Manager
                    </p>
                  </div>
                  <hr className="border-none h-[0.2px] bg-gray-300" />
                  <div className="card hover:text-blue-600">
                    <span className="text-xs text-blue-600 mb-1">
                      <a href="#">DISCARD</a>
                    </span>
                    <p className="font-semibold text-lg hover:cursor-pointer">
                      How to Delete All Empty Folders on Android in 2022
                    </p>
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
