import { useState } from "react";

const Question1_1 = () => {
  const countries = [
    {
      name: "Nepal",
      cities: ["BKT", "KTM", "PKR"],
      img: "https://flagicons.lipis.dev/flags/4x3/np.svg",
    },
    {
      name: "India",
      cities: ["Mumbai", "Banglore"],
      img: "https://flagicons.lipis.dev/flags/4x3/in.svg",
    },
    {
      name: "China",
      cities: ["Beijing", "Hongkong"],
      img: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
    },
  ];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const cityFInder = (selected) => {
    return countries.find((country) => country.name === selected).cities;
  };

  return (
    <div>
      Question
      <hr />
      <br />
      <SelectComp data={countries} handelChange={setCountry} />
      {country && (
        <SelectComp data={cityFInder(country)} handelChange={setCity} />
      )}
    </div>
  );
};

const SelectComp = ({ data, handelChange }) => {
  return (
    <>
      {document.getElementById("select")?.value && (
        <img
          src={
            data.find(
              (country) =>
                country.name === document.getElementById("select").value
            )?.img
          }
        />
      )}
      <select onChange={(e) => handelChange(e.target.value)} id="select">
        <option value="">Select</option>
        {data?.length > 0 &&
          data.map((items, index) => {
            return (
              <option key={index} value={items?.name || items}>
                {items?.name || items}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default Question1_1;
