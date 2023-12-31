import Search from "../../components/shared/Search";
import HomePage from "../../containers/HomePage";
import { Locale } from "../../i18n.config";
import getData from "../../utils/getServerSideData";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const surasList = await getData({
    url: `https://api.quran.com/api/v4/chapters`,
    language: params.lang,
  });
  return (
    <main>
      <HomePage data={surasList.chapters}/>
    </main>
  );
}
