"use client";
import React, { FC, useState } from "react";
import Button from "../../components/shared/Button";
import { ISura } from "../../utils/types/Sura";
import useLanguage from "../../hooks/useLanguage";
import localFont from "next/font/local";
import VerseCard from "../../components/partials/VerseCard";
import { IVerse, IVerseInfo, IWord } from "../../utils/types/Verse";
import CustomPagination from "../../components/partials/CustomPagination";
import useFetch from "../../hooks/useFetch";
import MainLoadingSkeleton from "../../components/partials/MainLoadingSkeleton";

interface ISurahPage {
  suraInfo: ISura;
}

const quranFont = localFont({
  src: "../../public/fonts/khodijah/Khodijah Free.ttf",
});

const SurahPage: FC<ISurahPage> = ({ suraInfo }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeButton, setActiveButton] = useState<number>(0);
  const { dictionary, currentLang } = useLanguage();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // DATA FETCHING
  const url = `https://api.quran.com/api/v4/verses/by_chapter/${
    suraInfo.id
  }?${currentLang}words=true&fields=text_uthmani&translations=${
    currentLang === "en" ? "167" : "77"
  }&per_page=50&page=${currentPage}`;

  const { data } = useFetch(url);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center  bg-contain bg-no-repeat bg-center  bg-[url('/images/main_page_background.svg')] bg-secondary_color bg-opacity-[0.05] ">
        <h1 className={`my-4 text-xl md:text-3xl ${quranFont.className}`}>
          {suraInfo.translated_name.name}
        </h1>
        <h2 className="my-4 text-2xl">{suraInfo.name_arabic}</h2>
        <div className="grid grid-cols-2 gap-x-8 my-4">
          <Button
            title={dictionary?.page.home.meaning}
            onClick={() => setActiveButton(0)}
            isActive={activeButton === 0 ? true : false}
          />
          <Button
            title={dictionary?.page.home.read}
            onClick={() => setActiveButton(1)}
            isActive={activeButton === 1 ? true : false}
          />
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 gap-y-4">
        {data &&
          data?.verses?.map((verse: IVerseInfo) => <VerseCard verse={verse} />)}
      </div>
      <div className="my-4">
        <CustomPagination
          totalItems={data?.pagination?.total_records}
          itemsPerPage={data?.pagination?.per_page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SurahPage;
