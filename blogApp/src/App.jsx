import React from "react";
import Table from "./components/Table";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import IsGoal from "./pages/IsGoal";
import UserGeeting from "./pages/UserGeeting";
import Colour from "./pages/Colour";
import UseEff from "./pages/UseEff";
import Timer from "./pages/Timer";
import CountDown from "./pages/CountDown";
import SearchWIthEff from "./pages/SearchWIthEff";
import Recipe from "./pages/Recipe";
import Cform from "./pages/Cform";
import Uform from "./pages/Uform";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import LS from "./pages/LS";
import Theme from "./pages/Theme";
import "./App.css";

const App = () => {
  // const users = [
  //   { name: "sujan", email: "sujan@gmail.com", address: "Bhaktapur" },
  //   { name: "kusum", email: "kusum@gmail.com", address: "kathmandu" },
  //   { name: "wifey", email: "wifey@gmail.com", address: "my heart" },
  // ];
  return (
    <>
      <Theme />
      {/* <LS /> */}
      {/* <Account /> */}
      <hr />
      {/* <Profile /> */}
      {/* <Uform /> */}
      {/* <Cform /> */}
      {/* <CountDown /> */}
      {/* <Recipe /> */}
      {/* <SearchWIthEff /> */}
      {/* <UseEff />
      <hr />
      <Home />
      <hr />
      <About title="About SuZan" />
      <hr />
      <Contact formType="regestration" />
      <UserGeeting isLoggedIn={true} />
      <br />
      <hr />
      <h1>Goals with Switch Case</h1>
      <IsGoal isGoal={0} />
      <hr />
      {/* <Table header={headers} data={users} /> 
      <hr />
      <br />
      <Colour /> */}
    </>
  );
};

export default App;
