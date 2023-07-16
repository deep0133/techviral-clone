import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";

// comment it : if you are fetching data from api:
import data from "../Data.json";

export default function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const [showSearch, setShowSearch] = useState("hidden");
  const [search, setSearch] = useState("");
  const [searchNews, setSearchNews] = useState();
  const [searchedData, setSearchedData] = useState(null);

  const handleCross = (e) => {
    if (e === "show") {
      setMenu(" transition-all translate-x-[0%]");
      document.body.style.height = 100 + "vh";
      document.body.style.overflow = `hidden`;
    } else {
      setMenu(" transition-all -translate-x-[100%] ");
      document.body.style.height = `auto`;
      document.body.style.overflow = `auto`;
    }
  };

  // show search bar :
  const handleSearch = (e) => {
    if (e === "show") {
      setShowSearch(" absolute ");
      document.body.style.height = 100 + "vh";
      document.body.style.overflow = `hidden`;
    } else {
      setShowSearch(" hidden ");
      document.body.style.height = `auto`;
      document.body.style.overflow = `auto`;
    }
  };

  useEffect(() => {
    async function search() {
      let json = [];

      for (let i = 0; i < data.articles.length; i++) {
        const ele = data.articles[i];
        if (ele.description.includes(searchNews)) {
          json.push(ele);
        }
      }

      await setSearchedData({
        article: json,
      });

      setSearchNews();
    }
    if (searchNews) {
      search();
    }
  }, [search]);

  return (
    <>
      <section className="navbar w-[100%] ">
        <div className="bg-black px-5 py-3 flex items-center justify-between">
          <span
            className="menu-icon hover:cursor-pointer md:hidden relative text-white float-left"
            onClick={() => {
              handleCross("show");
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>

          <div className="logo sm:px-[5%] ">
            <NavLink to="/">
              <img src={logo} className="w-32" alt="" />
            </NavLink>
          </div>

          <div
            className={`menu-sidebar bg-black ${menu} md:block max-[330px]:w-[330px] w-full absolute top-0 text-white h-[100svh] md:h-fit md:w-fit md:float-right left-0 md:relative pt-4 md:p-2 md:mr-6 md:text-[11px] z-10`}>
            <div className={`icons flex space-x-4 mx-6 md:hidden`}>
              <span className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:bg-blue-100 rounded-full"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-pink-400 "
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024">
                  <path
                    fill="currentColor"
                    d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:bg-blue-400 rounded-full"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716a43.765 43.765 0 0 1 .417 9.769Z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-blue-300 rounded-full"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-red-500 hover:bg-white rounded-full"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6l5.207 3.005l-5.212 2.995z"
                  />
                </svg>
              </span>
            </div>

            <span
              className="cross absolute right-2 top-5 md:hidden hover:cursor-pointer"
              onClick={() => {
                handleCross("hide");
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>

            <ul className="md:hidden flex flex-col md:flex-row my-5 md:my-0 space-x-8 space-y-4 md:space-x-4 md:space-y-0 font-bold font-serif">
              <li></li>
              <li>
                <NavLink
                  to="/general"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  General{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Technology{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/science"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Science{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/health"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Health{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/business"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Business{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/entertainment"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Entertainment{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sport"
                  onClick={() => {
                    setMenu(" transition translate-x-[-100vw] ");
                    document.body.style.height = `auto`;
                    document.body.style.overflow = `auto`;
                  }}>
                  {" "}
                  Sport{" "}
                </NavLink>
              </li>
            </ul>
            <ul className="hidden md:flex flex-col md:flex-row my-5 md:my-0 space-x-8 space-y-4 md:space-x-4 md:space-y-0 font-bold font-serif">
              <li></li>
              <li>
                <NavLink to="/general"> General </NavLink>
              </li>
              <li>
                <NavLink to="/technology"> Technology </NavLink>
              </li>
              <li>
                <NavLink to="/science"> Science </NavLink>
              </li>
              <li>
                <NavLink to="/health"> Health </NavLink>
              </li>
              <li>
                <NavLink to="/business"> Business </NavLink>
              </li>
              <li>
                <NavLink to="/sport"> Sport </NavLink>
              </li>
              <li>
                <NavLink to="/entertainment"> Entertainment </NavLink>
              </li>
            </ul>
          </div>

          <div
            className="search-sidebar block md:hidden text-white hover:cursor-pointer"
            onClick={() => {
              handleSearch("show");
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div
            className={`search-by-typing bg-black ${showSearch} md:hidden w-[100%] absolute top-0 left-0 text-white h-[100vh] pt-4 z-10`}>
            <span
              className="cross-icon absolute right-0 text-white my-5 mr-8 hover:cursor-pointer"
              onClick={() => {
                handleSearch("hidden");
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <div className="search-box flex flex-col mt-14 text-white">
              <p className="text-sm mx-auto my-6">Search</p>
              <div className="input border-b-2 border-[#3ccccc] bg-black w-[80%] mx-auto ">
                <input
                  type="text"
                  name="search"
                  value={searchNews}
                  onChange={(e) => {
                    setSearchNews(e.target.value);
                  }}
                  className="outline-none border-b-2 bg-black text-white text-center w-[-webkit-fill-available] "
                />
                <div className="flex justify-center items-center my-3 ">
                  <button
                    onClick={() => {
                      setSearch(searchNews);
                    }}
                    className="px-5 py-2 bg-blue-400 rounded-lg text-white">
                    search
                  </button>
                </div>

                {searchedData ? (
                  <div className="box p-2 h-[90vh] my-5 overflow-auto space-y-5">
                    {searchedData.article.length === 0 ? (
                      <div className="w-fit text-slate-200">
                        Search by another key
                      </div>
                    ) : (
                      searchedData.article.map((ele) => {
                        return (
                          <div className="card ">
                            <a
                              key={ele.url}
                              className="flex space-x-3"
                              href={ele.url}
                              target="_blank">
                              <img
                                src={ele.urlToImage}
                                className="w-[10%]"
                                alt=""
                              />
                              <p className="title w-[80%]">{ele.title}</p>
                            </a>
                            <hr className="mt-3 bg-[#f3f3f3d4]" />
                          </div>
                        );
                      })
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
