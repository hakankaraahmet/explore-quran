"use client";
import React from "react";
import CardStar from "../../icons/CardStar";
import localFont from "next/font/local";
import { ISura } from "../../../utils/types/Sura";
import useLanguage from "../../../hooks/useLanguage";

const quranFont = localFont({
  src: "../../../public/fonts/khodijah/Khodijah Free.ttf",
});

const SurahCard = ({ sura }: { sura: ISura }) => {
  const { dictionary } = useLanguage();

  return (
    <div
      key={sura.id}
      className="surah-card border-2 text-tertiary_color border-tertiary_color hover:bg-tertiary_color hover:text-primary_color p-2 flex items-center justify-between rounded-xl cursor-pointer "
    >
      <div className="group w-3/5 flex flex-col justify-center items-center">
        <div className="relative">
          <CardStar />
          <span className="absolute inset-0 m-auto flex justify-center items-center text-lg">
            {sura.id}
          </span>
        </div>
        <h2
          className={`font-bold text-center 2xl:text-lg ${quranFont.className}`}
        >
          {sura.translated_name.name}
        </h2>
      </div>
      <div className="w-2/5 h-full flex flex-col justify-center items-end">
        <h2 className=" font-bold text-lg">{sura.name_arabic}</h2>
        <span className="text-sm flex">
          {sura.verses_count}
          <h4 className="ml-1 capitalize">{dictionary?.page?.home?.verse}</h4>
        </span>
      </div>
    </div>
  );
};

export default SurahCard;
