import About from "./pages/About";
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import IsGoal from "./pages/IsGoal";
import UserGeeting from "./pages/UserGeeting";

const App = () => {
  return (
    <>
      <Home />
      {/* <Goal isGoal={false} /> */}
      <hr />
      <About title="About SuZan" />
      <hr />
      <Contact formType="regestration" />
      <UserGeeting isLoggedIn={true} />
      <br />
      <br />
      <br />
      <hr />
      <h1>Goals with Switch Case</h1>
      <IsGoal isGoal={0} />
    </>
  );
};

export default App;
