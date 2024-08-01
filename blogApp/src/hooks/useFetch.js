import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setError("");
        setLoading(true);
        //cleanup
        const controller = new AbortController();
        const signal = controller.signal;
        
        // data fetch
        const { data } = await axios(url, { signal });
        setData(data?.products || []);

        //cleanup
        return () => controller.abort();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuery();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
