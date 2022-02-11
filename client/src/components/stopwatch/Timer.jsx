// Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
// @author lekheshwar
// @author Trevor Wilkins

import React from "react";
import "./stopwatch.css";


function assembleMinutes(time){
  return ("0" + Math.floor((time / 60000) % 60)).slice(-2) +":";
}

function assembleSeconds(time){
  return ("0" + Math.floor((time / 1000) % 60)).slice(-2)+".";
}

function assembleMilliseconds(time){
  return ("0" + ((time / 10) % 100)).slice(-2);
}

export const concatTimerString = (time) => {
  return assembleMinutes(time) + assembleSeconds(time) + assembleMilliseconds(time);
}


export default function Timer(props) {
  return (
    <div className="timer">
      <span className="digits" id="timerResult">
        {concatTimerString(props.time)}
      </span>
    </div>
  );
}