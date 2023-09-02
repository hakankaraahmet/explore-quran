"use client";
import React, { useRef, useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { INavbarItem, navbarItems } from "../../../constants/navbarItems";
import Tooltip from "../../shared/Tooltip";
import { outSideClick } from "../../../utils/outSideClick";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../SideBar";
import useLanguage from "../../../hooks/useLanguage";

const quranFont = localFont({
  src: "../../../public/fonts/khodijah/Khodijah Free.ttf",
});

const Navbar = ({ languages }: { languages: any }) => {
  const pathName = usePathname();
  const [activePathName, setActivePathName] = useState<string>("");
  const [tooltipValue, setTooltipValue] = useState<string>("");
  const [sideBarOpen, setSideBarOpen] = useState<string>("");
  const translationRef = useRef<HTMLInputElement>(null);
  const sideBarRef = useRef<HTMLInputElement>(null);
  const { currentLang } = useLanguage();

  useEffect(() => {
    outSideClick(translationRef, setTooltipValue, "translation_button");
    outSideClick(sideBarRef, setSideBarOpen, "side_bar_button");
  }, [translationRef, sideBarRef]);

  // LANGUAGE SWITCHER
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // ACTIVE PAGE
  useEffect(() => {
    const segments = pathName.split("/");
    setActivePathName(segments.length > 2 ? `/${segments[2]}` : "/");
  }, [pathName]);

  const handleSideBar = () => {
    setSideBarOpen((prev) => (prev === "" ? "sideBarOpen" : ""));
  };

  return (
    <nav
      className={`relative  flex flex-wrap items-center justify-between  py-3 bg-secondary_color md:bg-gradient-to-l from-tertiary_color to-secondary_color drop-shadow-xl `}
    >
      <div className="w-full  flex  items-center justify-between common-breakpoint ">
        <div className="w-full relative flex justify-between items-center ">
          <Link
            href={`/${currentLang}`}
            className=" text-xl uppercase text-primary_color flex items-center tracking-wider font-bold"
          >
            <span className="mr-4 scale-150 mt-1">
              <Image
                src={"/images/bismillah_icon.svg"}
                alt="explore quran"
                width={36}
                height={36}
              />
            </span>
            <span className={`mt-1 text-sm  ${quranFont.className}`}>
              Explore Quran
            </span>
          </Link>
          <div className="grid text-primary_color grid-cols-1 md:grid-cols-4 gap-x-8">
            {navbarItems.map((item: INavbarItem) =>
              item.link ? (
                <Link
                  key={item.id}
                  href={`/${currentLang}/${item.link}`}
                  className={`hidden md:block relative ml-2 scale-150 lg:mt-[1px] cursor-pointer hover:opacity-100 ${
                    item.link === activePathName ? "opacity-100" : "opacity-60"
                  }`}
                  onMouseEnter={() => setTooltipValue(languages[item?.name])}
                  onMouseLeave={() => setTooltipValue("")}
                >
                  {item.icon}
                  <Tooltip
                    tooltipValue={tooltipValue}
                    tooltipCheckValue={languages[item?.name]}
                  >
                    {tooltipValue}
                  </Tooltip>
                </Link>
              ) : (
                <div className="flex items-center" key={item.id}>
                  {
                    <button
                      className="md:hidden mr-4 text-primary_color cursor-pointer text-xl leading-none py-1  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                      type="button"
                      id="side_bar_button"
                      onClick={handleSideBar}
                    >
                      <GiHamburgerMenu />
                    </button>
                  }
                  <span
                    onClick={() => setTooltipValue(item.name)}
                    id="translation_button"
                    ref={translationRef}
                    className={`md:ml-2 scale-150 lg:mt-[1px]  cursor-pointer  ${
                      tooltipValue === `translation`
                        ? "opactiy-100"
                        : "opacity-60"
                    }`}
                  >
                    {item.icon}
                    <Tooltip
                      tooltipValue={tooltipValue}
                      tooltipCheckValue={item.name}
                      className="left-[80%] translate-x-[-80%]"
                    >
                      <div className=" flex flex-col text-[8px]">
                        <Link
                          href={redirectedPathName("tr")}
                          className="flex  items-center"
                        >
                          <Image
                            src="/images/flagTurkey.svg"
                            alt={languages.turkish}
                            width={12}
                            height={6}
                            className="mr-2 -ml-2"
                          />
                          {languages.turkish}
                        </Link>
                        <Link
                          href={redirectedPathName("en")}
                          className="flex items-center"
                        >
                          <Image
                            src={"/images/flagBritain.svg"}
                            alt={languages.english}
                            width={12}
                            height={6}
                            className="mr-2 -ml-2"
                          />
                          {languages.english}
                        </Link>
                      </div>
                    </Tooltip>
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <SideBar
        languages={languages}
        sideBarOpen={sideBarOpen}
        sideBarRef={sideBarRef}
        setSideBarOpen={setSideBarOpen}
      />
    </nav>
  );
};

export default Navbar;
