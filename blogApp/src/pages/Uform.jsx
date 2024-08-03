import React, { useRef } from "react";
//Uncontrolled Form
//we dont use state concept in useRef
//we use ID concept like document.getElementById("")
// React equivalent useRef hook

const Uform = () => {
  const contactForm = useRef(null);
  const handelSubmit = (e) => {
    //stops the reload
    e.preventDefault();
    const form = new FormData(contactForm.current);
    for (const value of form.values()) {
      console.log(value);
    }
  };
  return (
    <div>
      <form ref={contactForm}>
        <input type="text" name="fname" placeholder="john" />
        <br />
        <input type="text" name="lname" placeholder="Dow" />
        <br />
        <hr />
        <p>Please select your favorite Web language:</p>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        HTML
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        CSS
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        JavaScript
        <br />
        <hr />
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        <hr />
        <button type="submit" onClick={(e) => handelSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uform;
