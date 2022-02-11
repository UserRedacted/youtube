
import {concatTimerString} from "./Timer"

function StopwatchResult(props) {
  
  const listItems = props.laps.map((lap) =>
    <li>{concatTimerString(lap)}</li>
  );

  if(props.watchTime !== undefined){
    return (
      <div className="stopwatch">
          <span className="watchHeader">{props.username + " shared a stopwatch time"}</span>
          <span className="digits">{props.watchTime} </span>
          <div className="lapList">
            <ol>{listItems}</ol>
          </div>
      </div>
    );
  }
  return null;

}

export default StopwatchResult;