"use client";
import React, { useRef, useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { INavbarItem, navbarItems } from "../../../constants/navbarItems";
import Tooltip from "../../shared/Tooltip";
import { outSideClick } from "../../../utils/outSideClick";

const quranFont = localFont({
  src: "../../../public/fonts/khodijah/Khodijah Free.ttf",
});

const Navbar = ({ languages }: { languages: any }) => {
  const pathName = usePathname();
  const [activePathName, setActivePathName] = useState<string>("");
  const [tooltipValue, setTooltipValue] = useState<string>("");
  const translationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    outSideClick(translationRef, setTooltipValue);
  }, [translationRef]);

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

  // eslint
  // desktop bolumu bittikten sonra bunlar sidebar icin constant dosyasina alinacak
  // side bar yandan acilacak sekilde olacak
  // navbarda iconlara ek olarak isimler de yazacak
  // mumkunse headless ui kullanabilirsin

  return (
    <nav
      className={`relative  flex flex-wrap items-center justify-between  py-3 bg-gradient-to-l from-tertiary_color to-secondary_color drop-shadow-xl `}
    >
      <div className="w-full mx-8 lg:mx-32 flex  items-center justify-between  3xl:w-2/3 3xl:mx-auto">
        <div className="w-full relative flex justify-between items-center ">
          <Link
            href="/"
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
            <span className={`mt-1 ${quranFont.className}`}>Explore Quran</span>
          </Link>
          <div className=" text-primary_color grid grid-cols-4 gap-x-8">
            {navbarItems.map((item: INavbarItem) =>
              item.link ? (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`relative ml-2 scale-150 lg:mt-[1px] cursor-pointer hover:opacity-100 ${
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
                <span
                  key={item.id}
                  onClick={() => setTooltipValue(item.name)}
                  ref={translationRef}
                  className={`ml-2 scale-150 lg:mt-[1px] cursor-pointer  ${
                    tooltipValue === `translation`
                      ? "opactiy-100"
                      : "opacity-60"
                  }`}
                >
                  {item.icon}
                  <Tooltip
                    tooltipValue={tooltipValue}
                    tooltipCheckValue={item.name}
                  >
                    <div className=" flex flex-col text-[10px]">
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
                      <Link
                        href={redirectedPathName("de")}
                        className="flex items-center"
                      >
                        <Image
                          src={"/images/flagGermany.svg"}
                          alt={languages.german}
                          width={12}
                          height={6}
                          className="mr-2 -ml-2"
                        />
                        {languages.german}
                      </Link>
                    </div>
                  </Tooltip>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <button
className="text-primary_color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
type="button"
onClick={() => setNavbarOpen(!navbarOpen)}
>
<GiHamburgerMenu />
</button> */
}
