import React, { RefObject } from "react";
import { INavbarItem, navbarItems } from "../../../constants/navbarItems";
import Link from "next/link";

const SideBar = ({
  languages,
  sideBarOpen,
  setSideBarOpen,
  sideBarRef,
}: {
  languages: any;
  sideBarOpen: string;
  setSideBarOpen: (value: string) => void;
  sideBarRef: RefObject<HTMLInputElement>;
}) => {
  return (
    <div
      ref={sideBarRef}
      className={`${
        sideBarOpen ? "translate-x-0 " : "-translate-x-full  "
      } md:hidden bg-secondary_color fixed w-1/2 mt-[4.6rem] top-0 bottom-0  h-[calc(100vh-4.6rem)]  transition-all duration-300`}
    >
      <div
        className={`text-primary_color transition-all duration-1000 my-2 mx-8`}
      >
        {navbarItems.map(
          (item: INavbarItem) =>
            item.link && (
              <Link
                key={item.id}
                href={item.link}
                className={`lg:mt-[1px]  flex py-4 items-center capitalize 
                `}
                onClick={() => setSideBarOpen("")}
              >
                <span className="scale-150">{item.icon}</span>
                <span className="ml-4 ">{languages[item.name]}</span>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default SideBar;
