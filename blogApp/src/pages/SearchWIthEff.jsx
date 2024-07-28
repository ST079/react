import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchWIthEff = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/search?q=${query}`
        );
        setData(data?.products || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  const search = () => {
    const myQuery = document.getElementById("query").value;
    setQuery(myQuery);
  };

  // setQuery(document.getElementById("query").value);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your query"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {/* <button onClick={search}>Search</button> */}
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
