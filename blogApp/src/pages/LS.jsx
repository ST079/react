import React, { useState } from "react";

const LS = () => {
  const [data, setData] = useState("");
  const storeInLs = () => {
    sessionStorage.setItem("name", data);
    localStorage.setItem("status", "married");
    
  };

  const deleteInLs = () => {
    localStorage.removeItem("name");
  };
  return (
    <div>
      Local Storage
      <br />
      <hr />
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <br />
      <button onClick={storeInLs}>Store in local storage</button>
      <button onClick={deleteInLs}>Delete in local storage</button>
    </div>
  );
};

export default LS;
