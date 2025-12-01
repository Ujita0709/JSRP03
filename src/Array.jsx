import { useEffect, useState } from "react";

function ArrayComponent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("A");
  });

  useEffect(() => {
    console.log("B");
  }, []);

  useEffect(() => {
    console.log("C");
  }, [value]);

  return (
    <div>
      <h2>useEffect の確認</h2>
      <p>value: {value}</p>
      <button onClick={() => setValue(value + 1)}>value を増やす</button>
    </div>
  );
}

export default ArrayComponent;
