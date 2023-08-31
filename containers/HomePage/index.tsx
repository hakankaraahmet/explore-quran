
import React from "react";
import SurahCard from "../../components/partials/SurahCard";
import Image from "next/image";



const HomePage = ({dictionary} : {dictionary : any }) => {
  const dummyData = Array.from({ length: 5 });


  return (
    <div className="text-secondary_color w-full ">
      <div className="w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center  bg-[url('/images/main_page_background.svg')] bg-secondary_color bg-opacity-[0.05]">
        <Image
          src={"/images/bismillah_logo.svg"}
          alt="explore quran"
          width={480}
          height={200}
        />
        <div className="mb-8 w-[90%] md:w-1/2 rounded-3xl border-2">
          <input
            placeholder={dictionary.searchForSura}
            className="w-full p-4 text-sm md:text-base lg:text-2xl rounded-3xl focus:ring-secondary_color focus:border-secondary_color outline-secondary_color border-2 border-secondary_color"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  lg:gap-8 xl:gap-12 common-breakpoint  mt-4">
        {dummyData.map((data, i) => (
          <SurahCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
