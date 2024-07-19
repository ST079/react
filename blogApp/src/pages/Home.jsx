const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <hr />
    </div>
  );
};

const Goal = (props) => {
  return props.isGoal ? <MadeGoal /> : <MissedGoal />;
};

const MadeGoal = () => {
  return <>Goal!!!!!!</>;
};

const MissedGoal = () => {
  return <>Missed Goal oops</>;
};

export { Home, Goal };
