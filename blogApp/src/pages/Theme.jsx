import React, { useContext } from "react";
import { Context } from "../../contexts/theme";

const Theme = () => {
  const context = useContext(Context);
  if (!context) throw new Error("Context is not wrapped inside provider");
  const { theme, toggleTheme } = context;
  return (
    <div className={theme}>
      Current theme : {theme}
      <br />
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default Theme;
