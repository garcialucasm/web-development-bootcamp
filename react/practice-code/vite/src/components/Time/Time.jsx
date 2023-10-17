import { useState } from "react";
function Time() {
  const [time, setTime] = useState("");

  function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  setInterval(updateTime, 1000);

  return <h1>{time}</h1>;
}

export default Time;
