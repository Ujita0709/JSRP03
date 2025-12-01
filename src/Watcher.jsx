import { useEffect, useState } from "react";

function Watcher() {
  const [num, setNum] = useState(0);
    useEffect(() => {
      console.log("表示されました！");
    }, [num]);
  
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>＋1</button>
    </div>
  );
}

export default Watcher;
