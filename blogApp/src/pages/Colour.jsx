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

  const [temp, setTemp] = useState("");
  const [name, setName] = useState("Sujan");
  return (
    <div>
      <button
        onMouseOver={change}
        onMouseOut={revChange}
        style={{ background: color, color: "#fff" }}
        id="btn"
      >
        MY Button
      </button>
      <hr />
      <input
        type="text"
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => setName(temp)}>Change the name</button> <br />
      Person : {name}
    </div>
  );
};

export default Colour;
