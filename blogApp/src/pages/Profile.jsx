import React, { useContext } from "react";
import { UserContext } from "../../contexts";

const Profile = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("context is not wrapped inside the provider");
  const { user } = context;

  return <div>Profile : {JSON.stringify(user)}</div>;
};

export default Profile;
