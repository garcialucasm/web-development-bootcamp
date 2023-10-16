import { useState } from "react";
function Time() {
  setInterval(updateTime, 1000);
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  return <h1>{time}</h1>;
}

export default Time;
