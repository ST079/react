import React, { useContext } from "react";
import { UserContext } from "../../contexts";

const Account = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Context is not wrapped inside provider");
  const { user, setUser } = context;

  return (
    <div>
      Account :{JSON.stringify(user)}
      <br />
      <hr />
      <input type="text" placeholder="Enter Your Name" id="name" />
      <button
        onClick={() => {
          setUser({
            name: document.getElementById("name").value,
            email: "sujan@tamang.com",
            roles: ["admin", "user"],
          });
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Account;
