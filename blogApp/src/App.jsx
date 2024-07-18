import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Home />
      <About title="About SuZan" />
      <Contact formType="regestration"/>
    </>
  );
};

export default App;
