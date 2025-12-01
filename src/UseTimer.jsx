import { useEffect, useState } from "react";

export function useTimer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSec(prev => prev + 1);
    }, 1000);

    // クリーンアップ（アンマウント時）
    return () => clearInterval(id);
  }, []);

  return sec;
}

export default useTimer;
