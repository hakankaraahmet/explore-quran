import React, { FC } from "react";
import Image from "next/image";
import { getDictionary } from "../../utils/dictionaries";
import { Locale } from "../../i18n.config";

interface ISearch {
    params?: { lang: Locale };
  }

const Search : FC<ISearch> = async ({ params }) => {
  const dictionary = params && await getDictionary(params.lang);
  return (
    <div className="w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center  bg-[url('/images/main_page_background.svg')] bg-secondary_color bg-opacity-[0.05]">
      <Image
        src={"/images/bismillah_logo.svg"}
        alt="explore quran"
        width={480}
        height={200}
      />
      <div className="mb-8 w-[90%] md:w-1/2 rounded-3xl border-2">
        <input
          placeholder={dictionary?.page.home.searchForSura}
          className="w-full p-4 text-sm md:text-base lg:text-2xl rounded-3xl focus:ring-secondary_color focus:border-secondary_color outline-secondary_color border-2 border-secondary_color"
        />
      </div>
    </div>
  );
};

export default Search;
