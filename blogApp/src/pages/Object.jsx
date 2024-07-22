import React, { useState } from "react";

const Object = () => {
  const [car, setCar] = useState({
    name: "bmw",
    model: "black",
    year: 2024,
  });
  const updateYear = () => {
    setCar((prev) => {
      return { ...prev, year: 2000 };
    });
  };

  return (
    <div>
      {car.name} <br />
      {car.year}
      <button
        onClick={() =>
          setCar((prev) => {
            return { ...prev, name: "BMW" };
          })
        }
      >
        change
      </button>
      <button onClick={updateYear}>Year</button>
    </div>
  );
};

export default Object;
