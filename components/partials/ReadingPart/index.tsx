"use client";
import React, { useState } from "react";
import { ISura } from "../../../utils/types/Sura";
import { IVerseInfo, IWord } from "../../../utils/types/Verse";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";

interface IReadingPart {
  verses: IVerseInfo[];
}

const ReadingPart = ({ verses }: IReadingPart) => {
  const [tooltipValue, setTooltipValue] = useState<number | null>(null);

  return (
    <div className="common-breakpoint">
      <div className="flex items-center justify-center flex-col  mt-8">
        <button className="rounded-full  w-fit">
          {false ? (
            <AiOutlinePauseCircle size={32} />
          ) : (
            <BiPlayCircle size={32} />
          )}
        </button>
        <p className="text-secondary_color md:text-xl mt-4 text-center">
          Please double click if you want to listen a spesific verse
        </p>
      </div>
      <div className="flex gap-2 md:gap-8 flex-wrap  mt-12 " dir="rtl">
        {verses?.map((verse: IVerseInfo) =>
          verse.words.map((item: IWord) => (
            <span
              className=" relative cursor-pointer "
              onMouseEnter={() => setTooltipValue(item.id)}
              onMouseLeave={() => setTooltipValue(null)}
            >
              <span
                className={`font-serif ${tooltipValue === item.id && 'text-green-700'} ${
                  item.char_type_name === "end"
                    ? "border-2 border-secondary_color text-xl md:text-3xl  w-6 h-6 md:w-12 md:h-12 rounded-full flex items-center justify-center  "
                    : "text-2xl md:text-5xl"
                }`}
              >
                {item.text_uthmani}
              </span>
              <span className=" absolute top-8 lg:top-12 flex  left-[50%] translate-x-[-50%] z-10  ">
                {tooltipValue === item.id ? (
                  <span
                    className={`text-secondary_color bg-primary_color border-2 border-secondary_color  rounded-3xl text-sm py-2 px-4 `}
                  >
                    {item.translation.text}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default ReadingPart;
