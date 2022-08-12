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
              <p>We are Hiring!</p>
            </div>
            <div className="title text-2xl lg:text-3xl font-bold">
              We are Hiring!
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
                <p className="text-xl tracking-wider mt-5 leading-8 ">
                  Tech Viral is a fast-growing tech media startup with a highly
                  influential media platform with a dev and design team building
                  new and incredible technology products. If you are a
                  tech/media-savvy, top-notch colleague with guts and humor and
                  are always ready to go the extra mile, please see the
                  available positions stated below.
                </p>
                '
                <div className="why-join-us text-xl tracking-wider mt-5 leading-8 space-y-3">
                  <h3 className="font-bold ">Why join us?</h3>
                  <ul className="list-disc ml-5 ">
                    <li>
                      Be a part of an energetic, skilled, talented, painfully
                      good-looking, and pleasantly awkward team of geeks that
                      are plotting to take over the world. Peacefully.
                    </li>
                    <li>Get your work seen by 2+ million people a month.</li>
                    <li>
                      Our geek culture means you hear about the cutting edge
                      tech and startups before the rest does, whether you want
                      to or not.
                    </li>
                    <li>
                      No pigeon-holing. If you’re a designer who likes to code,
                      do both.
                    </li>
                    <li>
                      Crazy money, fool! But seriously, we offer reasonable
                      compensation.
                    </li>
                    <li>
                      Flexible work policy from your home and get it done.
                    </li>
                  </ul>
                </div>
                <div className="tech-content-writter text-xl tracking-wider mt-5 leading-8 space-y-3">
                  <h2 className="font-bold">Tech Content Writer</h2>
                  <p>
                    Do all things Apple, Google, or SpaceX do excite you? Are
                    you obsessed with the latest comings and goings of
                    technology? Can you write and discern compelling content? We
                    are looking for a technical writer to lead and define our
                    daily coverage of the technology industry, gadgets, and
                    apps, focusing on technology news. This position covers
                    breaking news, coordinating and writing reviews, developing
                    op-eds, and maintaining key industry contacts relevant to
                    their beat.
                  </p>
                </div>
                <div className="resp text-xl tracking-wider mt-5 leading-8 space-y-3">
                <h3 className="font-bold">Responsibilities:</h3>

                    <ul className="list-disc ml-5">
                        <li>Lead and define our daily coverage of the technology industry, gadgets, and apps.</li>
                        <li>Brainstorm new and creative articles.</li>
                        <li>Coordinate stories and ideas with the Editorial Team.</li>
                        <li>Some coverage on weekends may be required.</li>
                    </ul>
                </div>
                <div className="success text-xl tracking-wider mt-5 leading-8 space-y-3">
                  <h3 className="font-bold">Successful candidates should have:</h3>
                  <ul className="list-disc ml-5 ">
                    <li>
                      Graduate in English/Journalism/Science and Technology.
                    </li>
                    <li>Strong writing skills.</li>
                    <li>
                      Sound knowledge of the current technological scenario.
                    </li>
                    <li>Ability to work under and meet deadlines.</li>
                    <li>Interviewing skills.</li>
                    <li>High energy level.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
