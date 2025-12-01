import { useState } from "react";

function DoubleNumber() {
  const [num, setNum] = useState(1);

  const double = () => {
    setNum(num * 2);   // ← ここを実装
  };

  return (
    <div>
      <p>現在の値：{num}</p>
      <button onClick={double}>2倍にする</button>
    </div>
  );
}

export default DoubleNumber; 