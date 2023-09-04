import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async function fetchData() {
      try {
        const response = await fetch(url).then((res) => res.json());
        setData(response);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
