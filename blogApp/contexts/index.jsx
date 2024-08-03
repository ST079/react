import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null); // no data

const UserConsumer = ({ children }) => {
  const [user, setUser] = useState({});

  //api bata data call
  useEffect(() => {
    //set data into state
    setUser({
      name: "Sujan Tamang",
      email: "sujan@tamang.com",
      roles: ["admin"],
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserConsumer;
