import React, { useEffect, useState } from "react";
import moment from "moment";
const CountDown = () => {
  const [time, setTime] = useState(moment(new Date("2024-10-07")).unix()); //for dashain
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  });
  return <div>{moment.unix(time).format("dddd MMMM Do YYYY, h:mm:ss a")}</div>;
};

export default CountDown;
