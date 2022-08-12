import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer bg-black py-3">
        <div className="list flex md:flex-row flex-col md:justify-around justify-center items-center text-xs text-[#cccccc] font-sans font-semibold">
            <ul className="flex space-x-3 xs:space-x-4 lg:space-x-6 order-first md:order-last ">
            <li className="flex-shrink-0"><NavLink to="/"> HOME </NavLink></li>
            <li className="flex-shrink-0"><NavLink to="/about"> ABOUT US </NavLink></li>
            <li className="flex-shrink-0"><NavLink to="/contact"> CONTACT US </NavLink></li>
            <li className="flex-shrink-0"><NavLink to="/workwithus"> WORK WITH US </NavLink></li>
            </ul>
            <p className="copyRight order-first md:order-first mt-3 mb-2 md:my-0">© 2022 TECHVIRAL MEDIA</p>
        </div>
      </div>
    </>
  );
}
