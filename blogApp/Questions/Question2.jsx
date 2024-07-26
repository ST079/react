import { useState } from "react";

const Question2 = () => {
  const [car, setCar] = useState(["tesla", "nexon", "sujan"]);
  const updateName = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="You Want To Update"
        id="prev"
      />
      <br />
      <input
        type="text"
        placeholder="You Want To Update Tooo"
        id="to-update"
      />
      <br />
      <button onClick={updateName}>Change</button>

      {/* array elements */}
      {car.map((data, index) => {
        return <li key={index}>{data}</li>;
      })}
    </div>
  );
};

export default Question2;
