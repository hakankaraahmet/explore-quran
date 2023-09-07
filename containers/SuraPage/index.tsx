"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import { ISura } from "../../utils/types/Sura";
import useLanguage from "../../hooks/useLanguage";
import localFont from "next/font/local";
import VerseCard from "../../components/partials/VerseCard";
import { IVerseInfo } from "../../utils/types/Verse";
import CustomPagination from "../../components/partials/CustomPagination";
import useFetch from "../../hooks/useFetch";
import { GrLinkPrevious } from "react-icons/gr";
import { useRouter } from "next/navigation";
import GoDownButton from "../../components/shared/GoDownButton";
import ReadingPart from "../../components/partials/ReadingPart";

interface ISurahPage {
  suraInfo: ISura;
}

const quranFont = localFont({
  src: "../../public/fonts/khodijah/Khodijah Free.ttf",
});

const SurahPage: FC<ISurahPage> = ({ suraInfo }) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playingVerseId, setPlayingVerseId] = useState<number>();

  const { dictionary, currentLang } = useLanguage();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // DATA FETCHING
  const url = `https://api.quran.com/api/v4/verses/by_chapter/${
    suraInfo.id
  }?language=${currentLang}&words=true&fields=text_uthmani&word_fields=text_uthmani&audio=10&translations=${
    currentLang === "en" ? "167" : "77"
  }&per_page=50&page=${currentPage}`;

  const { data } = useFetch(url);

  //AUDIO TOGGLING
  const toggle = (verse: IVerseInfo) => {
    const audioElement = new Audio(
      `https://verses.quran.com/${verse.audio.url}`
    );

    //CLICKING AT THE SAME VERSE
    if (playingVerseId === verse.id) {
      if (isPlaying) {
        audio?.pause();
      } else {
        audio?.play();
      }
    }

    //CLICKING ANOTHER VERSE
    if (playingVerseId !== verse.id) {
      setPlayingVerseId(verse.id);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      setAudio(audioElement);
      audioElement.play();
    }

    audioElement.addEventListener("play", () => setIsPlaying(true));
    audioElement.addEventListener("pause", () => setIsPlaying(false));
    audioElement.addEventListener("ended", () => setIsPlaying(false));
  };

  //TAB CHANGING
  const handleTab = (id: number) => {
    setActiveButton(id);
    global?.window?.sessionStorage.setItem("currentTab", JSON.stringify(id));
  };

  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("currentTab");
    const initialActiveButton = storedValue ? JSON.parse(storedValue) : 0;
    setActiveButton(initialActiveButton);
  }, []);

  return (
    <div className="flex flex-col z-10 mt-16 md:mt-0">
      <div className="relative ">
        <button
          className="absolute top-4 left-8 border-2 rounded-xl p-1 border-secondary_color focus:border-secondary_color"
          onClick={() => router.push(`/${currentLang}`)}
        >
          <GrLinkPrevious size={16} />
        </button>
      </div>
      <div className="flex flex-col items-center  bg-contain bg-no-repeat bg-center  bg-[url('/images/main_page_background.svg')] bg-secondary_color bg-opacity-[0.05] ">
        <h1 className={`my-4 text-xl md:text-3xl ${quranFont.className}`}>
          {suraInfo.translated_name.name}
        </h1>
        <h2 className="my-4 text-2xl">{suraInfo.name_arabic}</h2>
        <div className="grid grid-cols-2 gap-x-8 my-4">
          <Button
            title={dictionary?.page.home.meaning}
            onClick={() => handleTab(0)}
            isActive={activeButton === 0 ? true : false}
          />
          <Button
            title={dictionary?.page.home.read}
            onClick={() => handleTab(1)}
            isActive={activeButton === 1 ? true : false}
          />
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 gap-y-4 relative">
        <GoDownButton />
        {data && activeButton === 0 ? (
          <div>
            {data?.verses?.map((verse: IVerseInfo) => {
              return (
                <VerseCard
                  verse={verse}
                  toggle={toggle}
                  playingVerseId={playingVerseId}
                  isPlaying={isPlaying}
                />
              );
            })}
          </div>
        ) : (
          <ReadingPart verses={data.verses} />
        )}
        <div className="my-4">
          <CustomPagination
            totalItems={data?.pagination?.total_records}
            itemsPerPage={data?.pagination?.per_page}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SurahPage;
