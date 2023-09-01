import React from "react";
import style from "./skeleton.module.css";

const HomePageLoadingSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  lg:gap-8 xl:gap-12 common-breakpoint  my-4">
      {[...new Array(16)].map((i : number) => (
        <div
          key={i}
          className={`${style.skeleton} py-12 border-tertiary_color p-2  rounded-xl  border-2` }
        ></div>
      ))}
    </div>
  );
};

export default HomePageLoadingSkeleton;
