import React, { useState } from "react";
//Controlled Form
const Cform = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });

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
      </form>
    </div>
  );
};

export default Cform;
