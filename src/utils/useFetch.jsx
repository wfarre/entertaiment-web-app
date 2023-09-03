import MediaFactory from "../factories/MediaFactory";
import { useEffect, useState } from "react";

export const useFetch = (url, dataType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((fetchedData) => {
        setIsLoading(false);
        // console.log(data);
        if (dataType === "media") {
          setData(fetchedData.map((media) => new MediaFactory(media, "json")));
        }

        //   setData(medias);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);
  return { data, error, isLoading };
};
