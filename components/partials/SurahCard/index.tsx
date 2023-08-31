"use client"
import React, { useState } from "react";
import CardStar from "../../icons/CardStar";
import localFont from "next/font/local";

const quranFont = localFont({
  src: "../../../public/fonts/khodijah/Khodijah Free.ttf",
});

const SurahCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div 
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    className="border-2 text-tertiary_color border-tertiary_color hover:bg-tertiary_color hover:text-primary_color p-2 flex items-center justify-between rounded-xl cursor-pointer ">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="relative">
          <CardStar isHover= { isHover} />
          <span className="absolute inset-0 m-auto flex justify-center items-center text-lg">
            143
          </span>
        </div>
        <h2 className={`font-bold text-lg ${quranFont.className}`}>
          Ali Imran
        </h2>
      </div>
      <div className="w-[45%] h-full flex flex-col justify-center items-end">
        <h2 className=" font-bold text-lg">examp</h2>
        <span className="text-sm">245 Ayet</span>
      </div>
    </div>
  );
};

export default SurahCard;
