import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(776000);
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });
  return <div>timer: {count}</div>;
};

export default Timer;
