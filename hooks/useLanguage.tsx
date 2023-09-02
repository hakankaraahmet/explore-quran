import { useState, useEffect } from "react";
import { getDictionary } from "../utils/dictionaries";
import { Locale } from "../i18n.config";

const useLanguage = () => {
  const [dictionary, setDictionary] = useState<any>();
  const currentLang: Locale = global?.window?.location?.pathname.split("/")[1] as Locale;

  useEffect(() => {
    (async function fetchlanguage() {
      setDictionary(
        window.location.pathname && (await getDictionary(currentLang))
      );
    })();
  }, [global?.window?.location?.pathname]);

  return {dictionary};
};

export default useLanguage;
