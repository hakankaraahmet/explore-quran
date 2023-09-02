import { Locale } from "../i18n.config";

interface IGetData {
  url: string;
  language: Locale;
}

const getData = async ({ url, language }: IGetData) => {
  const res = await fetch(`${url}?language=${language}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getData;
