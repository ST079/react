import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import UserGeeting from "./pages/UserGeeting";

const App = () => {
  return (
    <>
      <Home isGoal={true} />
      <hr />
      <About title="About SuZan" />
      <hr />
      <Contact formType="regestration" /> 
      <UserGeeting isLoggedIn={true} />
    </>
  );
};

export default App;
