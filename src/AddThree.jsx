import { useState } from "react"; 

function AddThree() {
  const [count, setCount] = useState(0);

  const addThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={addThree}>3回足す</button>
    </div>
  );
}

export default AddThree;