import HomePage from "../../containers/HomePage";
import { Locale } from "../../i18n.config";
import { getDictionary } from "../../utils/dictionaries";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);


  return (
    <main>
      <HomePage dictionary={dictionary.page.home}/>
    </main>
  );
}
