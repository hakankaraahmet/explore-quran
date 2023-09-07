"use client";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { IVerseInfo, IWord } from "../../../utils/types/Verse";
import { useState } from "react";

const VerseCard = ({
  verse,
  toggle,
  isPlaying,
  playingVerseId,
}: {
  verse: IVerseInfo;
  toggle: (verse: IVerseInfo) => void;
  isPlaying: boolean;
  playingVerseId: number | undefined;
}) => {
  const [tooltipValue, setTooltipValue] = useState<number | null >(null);
  return (
    <div
      className={`common-breakpoint border-2 rounded-3xl flex  justify-between p-4 mt-4 ${
        isPlaying &&
        verse.id === playingVerseId &&
        "text-green-700 border-green-700"
      }`}
      key={verse.id}
      onClick={() => toggle(verse)}
    >
      <div className="w-[10%] flex flex-col items-center justify-center p-2">
        <button className="rounded-full">
          {isPlaying && verse.id === playingVerseId ? (
            <AiOutlinePauseCircle size={32} />
          ) : (
            <BiPlayCircle size={32} />
          )}
        </button>
      </div>
      <div className="w-[90%] flex flex-col p-2">
        <div
          className={`py-2 md:py-4 flex flex-wrap gap-1 md:gap-3    text-2xl md:text-4xl `}
          dir="rtl"
        >
          {verse.words.map((item: IWord) => (
            <span
              className=" relative cursor-pointer"
              onMouseEnter={() => setTooltipValue(item.id)}
              onMouseLeave={() => setTooltipValue(null)}
            >
             <span className="font-serif">{item.text_uthmani}</span> 
              <span className=" absolute top-8 lg:top-12 flex  left-[50%] translate-x-[-50%] z-10 " dir="ltr">
              {tooltipValue === item.id ? (
                <span className="text-secondary_color bg-primary_color border-2 border-secondary_color  rounded-3xl text-sm py-2 px-4">
                  {item.translation.text}
                </span>
              ) : ''}
              </span>
            </span>
          ))}
        </div>
        <span className="text-sm text-right"></span>
        <div className="py-2 md:py-4  text-base md:text-xl flex flex-wrap">
          <span className="mr-2">({verse.verse_number})</span>{" "}
          <p dangerouslySetInnerHTML={{ __html: verse.translations[0].text }} />
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
