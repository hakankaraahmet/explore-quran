"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import {FaQuran} from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative  flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-l from-tertiary_color to-secondary_color drop-shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm flex font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap uppercase text-primary_color"
              href="#pablo"
            >
              <span className="mr-4 scale-150 mt-1"><FaQuran/></span>
              
              Explore Quran
            </a>
            <button
              className="text-primary_color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary_color hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-primary_color opacity-75"></i>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary_color hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-primary_color opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary_color hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-primary_color opacity-75"></i>
                  <span className="ml-2 lg:hidden">
                    Translate
                  </span>
                  <span className="ml-2 scale-150 lg:mt-[1px]">
                    <BsTranslate />{" "}
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary_color hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-primary_color opacity-75"></i>
                  <span className="ml-2 lg:hidden">
                    Login
                  </span>
                  <span className="ml-2 scale-150 lg:mt-[1px]">
                    {" "}
                    <FiLogIn />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
