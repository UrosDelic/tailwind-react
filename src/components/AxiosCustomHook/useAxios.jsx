import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosGet = (url) => {
  const [responseData, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("axios hook", response.data.data);
        setResponse(response.data.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error("axios error", error);
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { responseData, error, isLoading };
};

export default useAxiosGet;
