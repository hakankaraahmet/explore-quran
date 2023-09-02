import React from "react";
import SurahCard from "../../components/partials/SurahCard";
import { ISura } from "../../utils/types/Sura";

const HomePage = async ({ data }: { data: ISura[] }) => {
  return (
    <div className="text-secondary_color w-full ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4  lg:gap-8 xl:gap-12 2xl:gap-16 common-breakpoint  my-4">
        {data?.map((item: ISura) => (
          <SurahCard sura={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
