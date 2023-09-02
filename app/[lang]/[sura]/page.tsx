import React from "react";
import getData from "../../../utils/getServerSideData";
import SurahPage from "../../../containers/SuraPage";

const Sura = async ({ params }: { params: any }) => {
  const suraInfo = await getData({
    url: `https://api.quran.com/api/v4/chapters/${params.sura}`,
    language: params.lang,
  });

  return (
    <div className="w-full bg-contain bg-no-repeat bg-center  bg-[url('/images/main_page_background.svg')] bg-secondary_color bg-opacity-[0.05]">
      <SurahPage suraInfo={suraInfo.chapter} />
    </div>
  );
};

export default Sura;
