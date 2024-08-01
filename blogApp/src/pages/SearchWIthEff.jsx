import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const SearchWIthEff = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const query = useDebounce(searchTerm);
  const {data} = useFetch(`https://dummyjson.com/products/search?q=${query}`);

  // setQuery(document.getElementById("query").value);
  return (
    <div>
      <input
        type="search"
        placeholder="Enter your query"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <br />
      {data.length > 0 ? (
        <>
          {data.map((item) => {
            return <li key={item?.id}>{item?.title}</li>;
          })}
        </>
      ) : (
        <>No data found</>
      )}
    </div>
  );
};

export default SearchWIthEff;
