"use client";
import React, { FC } from "react";
import Button from "../../components/shared/Button";
import { ISura } from "../../utils/types/Sura";
import useLanguage from "../../hooks/useLanguage";
import localFont from "next/font/local";

interface ISurahPage {
  suraInfo: ISura;
}

const quranFont = localFont({
    src: "../../public/fonts/khodijah/Khodijah Free.ttf",
  });

const SurahPage: FC<ISurahPage> = ({ suraInfo }) => {
  const { dictionary } = useLanguage();
  return (
    <div className="flex flex-col items-center rounded-3xl common-breakpoint">
      <h1 className={`my-4 text-xl ${quranFont.className}`}>{suraInfo.translated_name.name}</h1>
      <h2 className="my-4 text-2xl">{suraInfo.name_arabic}</h2>
      <div className="grid grid-cols-2 gap-x-8 my-4">
        <Button title={dictionary?.page.home.meaning} onClick={() => console.log("clicked")} />
        <Button title={dictionary?.page.home.read} onClick={() => console.log("clicked")} />
      </div>
    </div>
  );
};

export default SurahPage;
