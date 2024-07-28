import { useEffect, useState } from "react";
import moment from "moment";
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
