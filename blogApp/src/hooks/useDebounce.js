import React, { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
  const [dobouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return dobouncedValue;
};

export default useDebounce;
