import { useState, useEffect } from "react";

const useWindowWith = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWith(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWith;
};

export default useWindowWith;
