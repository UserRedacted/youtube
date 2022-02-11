// Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
// @author lekheshwar
// @author Trevor Wilkins

import React, { useState } from "react";
import "./stopwatch.css";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import {concatTimerString} from "./Timer"


var laps = [];


function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    laps = [];
    setIsActive(false);
    setTime(0);
    document.getElementById("timerLaps").innerText = "";
  };
  
  const handleLap = () => {
    laps.push(time);
    var text = document.getElementById("timerLaps");
    text.innerText += concatTimerString(time) +"\n";
    setTime(0);

  };

  return (
    <div className="stopwatch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleLap={handleLap}
      />
      <p id="timerLaps" className="lapList"></p>
    </div>
  );
}

export default Stopwatch;