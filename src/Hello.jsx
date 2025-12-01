import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("表示されました！");
  }, []);

  return <h1>Hello!</h1>;
}

export default Hello;