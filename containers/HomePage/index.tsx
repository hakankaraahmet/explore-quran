"use client";
import React, { useEffect, useState } from "react";
import SurahCard from "../../components/partials/SurahCard";
import { ISura } from "../../utils/types/Sura";
import Search from "../../components/shared/Search";
import useLanguage from "../../hooks/useLanguage";

const HomePage = ({ data }: { data: ISura[] }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ISura[]>(data);
  const { dictionary } = useLanguage();

  // FOR SPECIAL TURKISH CHARACTERS
  const replacements: { [key: string]: string } = {
    â: "a",
    Â: "A",
    û: "u",
    Û: "U",
    "'": "",
    "-": "",
  };

  useEffect(() => {
    setFilteredData(
      data.filter((sura: ISura) => {
        const translatedName = sura.translated_name.name
          .replace(/[âÂûÛ'-]/g, (match) => replacements[match]) // to ignore turkisch characters
          .toLocaleLowerCase();
        const basicName = sura.name_simple
          .replace(/[âÂûÛ'-]/g, (match) => replacements[match]) // to ignore turkisch characters
          .toLocaleLowerCase();

        return (
          translatedName.includes(searchValue.toLocaleLowerCase()) || // to check both language and real name
          basicName.includes(searchValue.toLocaleLowerCase())
        );
      })
    );
  }, [searchValue]);

  return (
    <div className="text-secondary_color w-full ">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4  lg:gap-8 xl:gap-12 2xl:gap-16 common-breakpoint  my-4">
        {filteredData?.map((item: ISura) => (
          <SurahCard sura={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
