import Table from "./components/Table";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import IsGoal from "./pages/IsGoal";
import UserGeeting from "./pages/UserGeeting";

import Colour from "./pages/Colour";

const App = () => {
  const users = [
    { name: "sujan", email: "sujan@gmail.com", address: "Bhaktapur" },
    { name: "kusum", email: "kusum@gmail.com", address: "kathmandu" },
    { name: "wifey", email: "wifey@gmail.com", address: "my heart" },
  ];
  const headers = [
    { id: "Id", name: "Name", email: "Email", address: "Address" },
  ];
  return (
    <>
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
      <Table header={headers} data={users} />
      <hr />
      <br />
      <Colour />
    </>
  );
};

export default App;
