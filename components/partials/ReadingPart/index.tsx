"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IVerseInfo, IWord } from "../../../utils/types/Verse";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";

interface IReadingPart {
  verses: IVerseInfo[];
}

const ReadingPart = ({ verses }: IReadingPart) => {
  const [tooltipValue, setTooltipValue] = useState<number | null>(null);
  const [playingVerseId, setPlayingVerseId] = useState<number>();
  const [playingAudio, setPlayingAudio] = useState<HTMLAudioElement>();
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const ayahRef = useRef<HTMLDivElement>(null);

  const audioFiles = useMemo(() => {
    return verses?.map((verse: IVerseInfo) => ({
      audio: new Audio(`https://verses.quran.com/${verse.audio.url}`),
      id: verse.id,
    }));
  }, [verses]);

  useEffect(() => {
    if (!playingVerseId) {
      return;
    }
    if (playingAudio) {
      playingAudio.pause();
      setIsPaused(true);
      setPlayingAudio(undefined);
    }

    setPlayingAudio(() => {
      const index = audioFiles.findIndex(
        (audioFile) => audioFile.id === playingVerseId
      );
      const audio = audioFiles[index]?.audio;
      setIsPaused(false);
      audio?.play();
      if (audio) {
        audio.onended = () => {
          if (index === audioFiles.length - 1) {
            setIsPaused(true);
            setPlayingVerseId(undefined);
            setPlayingAudio(undefined);
            return;
          }
          if (index < audioFiles.length - 1) {
            setPlayingVerseId(audioFiles[index + 1].id);

            ayahRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        };
      }
      return audio;
    });
  }, [playingAudio, playingVerseId, audioFiles]);

  const handlePLayAudio = () => {
    if (playingAudio) {
      if (playingAudio.paused) {
        setIsPaused(false);
        playingAudio.play();
        return;
      }
      playingAudio.pause();
      setIsPaused(true);
      return;
    }
    setPlayingVerseId(audioFiles[0].id);
  };

  return (
    <div className="common-breakpoint">
      <div className="flex items-center justify-center flex-col  mt-8">
        <button className="rounded-full  w-fit" onClick={handlePLayAudio}>
          {!playingAudio || isPaused ? (
            <BiPlayCircle size={32} />
          ) : (
            <AiOutlinePauseCircle size={32} />
          )}
        </button>
      </div>
      <div className="flex gap-2 md:gap-8 flex-wrap  mt-12 " dir="rtl">
        {verses?.map((verse: IVerseInfo) =>
          verse.words.map((item: IWord) => (
            <span
              ref={playingVerseId === verse.id ? ayahRef : null}
              className={`relative cursor-pointer ${
                playingVerseId === verse.id && "text-green-700"
              }`}
              onMouseEnter={() => setTooltipValue(item.id)}
              onMouseLeave={() => setTooltipValue(null)}
            >
              <span
                className={`font-serif ${
                  tooltipValue === item.id && "text-green-700"
                } ${
                  item.char_type_name === "end"
                    ? `border-2  text-xl md:text-3xl  w-6 h-6 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                        playingVerseId === verse.id
                          ? "border-green-700"
                          : "border-secondary_color"
                      } `
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
