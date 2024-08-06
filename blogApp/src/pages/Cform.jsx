import React, { useState, useCallback } from "react";
import moment from "moment";
import Account from "./Account";
//Controlled Form
const Cform = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });
  const [user, setUser] = useState("");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const handelSubmit = () => {
    alert(JSON.stringify(form));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="john"
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, fname: e.target.value };
            });
          }}
        />
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Dow"
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, lname: e.target.value };
            });
          }}
        />
        <br />
        <button type="submit" onClick={handelSubmit}>
          Submit
        </button>
        <br />
     

        <hr />
      </form>
      count :{count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Cform;
