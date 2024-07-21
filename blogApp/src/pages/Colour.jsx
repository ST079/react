import { useState } from "react";

const Colour = () => {
  const [color, setColor] = useState("Red");
  const change = () => {
    const btn = document.getElementById("btn");
    btn.style.background = setColor("blue");
  };
  const revChange = () => {
    const btn = document.getElementById("btn");
    btn.style.background = setColor("red");

  };
  return (
    <div>
      <button
        onMouseOver={change}
        onMouseOut={revChange}
        style={{ background: color, color:"#fff" }}
        id="btn"
      >
        MY Button
      </button>
    </div>
  );
};

export default Colour;
