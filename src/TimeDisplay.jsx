import { useTimer } from "./UseTimer";

function TimeDisplay() {
  const sec = useTimer();

  return <p>経過秒数：{sec}</p>;
}

export default TimeDisplay;