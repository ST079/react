import { useState } from "react";
const Contact = (props) => {
  const register = () => {
    alert("Thank you for regestration");
  };

  const sendform = (name) => {
    // const name = prompt("Enter your name : ");
    alert(`Thankyou ${name}`);
  };

  const msg = () => {
    const name = document.getElementById("name").value;
    alert(`Thankyou ${name}`);
  };

  const [name, setName] = useState("");
  const checkRole = () => {
    setName(document.getElementById("role").value) === "sujan" ? (
      <Admin />
    ) : (
      <User />
    );
  };
  const notify = () => {
    alert("mouse in");
  };

  return (
    <div>
      Contact Us Page {props.formType}
      <br />
      <button onClick={register}>Submit</button>
      <br />
      <button onClick={() => sendform("Sujan")}>message</button>
      <hr />
      <br />
      <input type="text" placeholder="Enter your name" name="name" id="name" />
      <button onClick={msg}>Reister</button>
      <hr />
      <input type="text" placeholder="Enter Name" id="role" />
      {name === "sujan" ? <Admin /> : <User />}
      <br />
      <button onClick={checkRole}>Submit</button>
      <br />
      <br />
      <br />
      <hr />
      <button onMouseOver={notify}>Mouse position</button>
    </div>
  );
};

const Admin = () => {
  return <>Welcome Admin</>;
};

const User = () => {
  return <>Welcome User</>;
};

export default Contact;
