const IsGoal = (props) => {
  let result;
  switch (true) {
    case props.isGoal == 0:
      result = <MissedGoal />;
      break;
    case props.isGoal == 1:
      result = <OneGoal />;
      break;
    default:
      result = <>No Goal Registered</>;
  }
  return <div>{result}</div>;
};

const OneGoal = () => {
  return <>1 Goal!!!!!!</>;
};

const MissedGoal = () => {
  return <>Missed Goal oops</>;
};

export default IsGoal;
