import React from "react";
import useInterval from "../../hooks/setInterval";
import { formatTime } from "../../utils/utils";

const Counter = ({ playerObject }) => {
  let [time, setTime] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setTime(playerObject.getCurrentTime());
  }, 500);

  const secondsSinceStart = time;
  const formatedTimeSinceStart = formatTime(secondsSinceStart);
  const totalDuration = formatTime(playerObject.getDuration());
  return (
    <span>
      {formatedTimeSinceStart}/{totalDuration}
    </span>
  );
};

export default Counter;
