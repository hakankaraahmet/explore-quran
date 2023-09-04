import getData from "../../../utils/getServerSideData";
import SurahPage from "../../../containers/SuraPage";

const Sura = async ({ params }: { params: any }) => {
  const suraInfo = await getData({
    url: `https://api.quran.com/api/v4/chapters/${params.sura}`,
    language: params.lang,
  });

  return (
    <div>
      <SurahPage suraInfo={suraInfo.chapter} />
    </div>
  );
};

export default Sura;
