"use client";
import { useEffect,  useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { IVerseInfo } from "../../../utils/types/Verse";

const VerseCard = ({ verse }: { verse: IVerseInfo }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>();

  useEffect(() => {
    const audioElement = new Audio(
      `https://verses.quran.com/${verse.audio.url}`
    );
    setAudio(audioElement);

    audioElement.addEventListener("ended", () => {
      console.log("Audio playback ended");
      setIsPlaying(false);
      console.log("audio :>> ", audio);
    });

    return () => {
      audioElement.removeEventListener("ended", () => {});
    };
  }, [verse]);

  const togglePlay = () => {
    if (audio ) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // AUDIO BIRI BASLATILINCA DIGERINI DURDURMA OLAYI
  // SAYFA DEGISTIRINCE AUDIONUN KAPANMASI
  // FARKLI SENARYOLARI CHECK ET
  //AUDIO CALARKEN YAZININ RENGININ DEGISMESI

  return (
    <div
      className="common-breakpoint border-2 rounded-3xl flex justify-between p-4"
      key={verse.id}
    >
      <div className="w-[10%] flex flex-col items-center justify-center p-2">
        <button
          className="rounded-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <AiOutlinePauseCircle size={32} />
          ) : (
            <BiPlayCircle size={32} />
          )}
        </button>
      </div>
      <div className="w-[90%] flex flex-col p-2">
        <div className="py-2 md:py-4 px-2 text-2xl md:text-4xl" dir="rtl">
          {verse.text_uthmani}
        </div>
        <div className="py-2 md:py-4  text-base md:text-xl flex flex-wrap">
          <span className="mr-2">({verse.verse_number})</span>{" "}
          <p dangerouslySetInnerHTML={{ __html: verse.translations[0].text }} />
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
