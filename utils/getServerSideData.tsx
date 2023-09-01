interface IGetData {
  url: string;
}

const getData = async ({ url }: IGetData) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getData;
