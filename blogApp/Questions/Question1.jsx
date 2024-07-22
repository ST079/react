import { useState } from "react";

const Question1 = () => {
  const countries = [
    { name: "Nepal", cities: ["BKT", "KTM", "PKR"] },
    { name: "India", cities: ["Mumbai", "Banglore"] },
    { name: "China", cities: ["Beijing", "Hongkong"] },
  ];
  const [country, setCountry] = useState("Nepal");
  const cities = () => {
    const con = document.getElementById("country");
    //getting the selected value from drop down
    setCountry(con.options[con.selectedIndex].text);
  };

  //retriving the selected country object
  const whichCountry = countries.filter((name) => {
    return name.name === country;
  });

  //retriving the array of cities from selected object
  const thisCountry = whichCountry[0].cities;


  return (
    <div>
      <select name=" Countries" id="country" onChange={cities}>
        <option value="">Select Country</option>
        {countries.map((data, index) => {
          return <option key={index}>{data.name}</option>;
        })}
      </select>
      <hr />
      <div>
        <select name=" Cities">
          <option value="">Select City</option>
          {thisCountry.map((city, Index) => {
            return <option key={Index}>{city}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Question1;
