// Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
// @author lekheshwar
// @author Trevor Wilkins

import React from "react";
import "./stopwatch.css";

function assembleMinutes(props){
    return ("0" + Math.floor((props.time / 60000) % 60)).slice(-2) +":";
}

function assembleSeconds(props){
    return ("0" + Math.floor((props.time / 1000) % 60)).slice(-2)+".";
}

function assembleMilliseconds(props){
    return ("0" + ((props.time / 10) % 100)).slice(-2);
}

function concatTimerString(props){
    return assembleMinutes(props) + assembleSeconds(props) + assembleMilliseconds(props);
}

export default function Timer(props) {
  return (
    <div className="timer">
      <span className="digits" id="timerResult">
        {concatTimerString(props)}
      </span>
    </div>
  );
}