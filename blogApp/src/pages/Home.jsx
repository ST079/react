const Home = (props) => {
  props.isGoal == true ? <MadeGoal /> : <MissedGoal />;
  return (
    <div>
      Home Page
      <br />
      <button>True</button>
      <button>False</button>
      <br />
    </div>
  );
};

const MadeGoal = () => {
  return <>Goal!!!!!!</>;
};

const MissedGoal = () => {
  return <>Missed Goal oops</>;
};
export default Home;
