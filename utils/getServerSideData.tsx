import { Locale } from "../i18n.config";

interface IGetData {
  url: string;
  language: Locale;
  extraParameter?: string
}

const getData = async ({ url, language, extraParameter }: IGetData) => {
  const res = await fetch(`${url}?language=${language}&${extraParameter}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getData;
