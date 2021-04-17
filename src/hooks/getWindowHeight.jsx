import { useEffect, useState } from "react";

const GetWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(600);

  useEffect(() => {
    const onResize = () => {
      setWindowHeight(window.innerHeight - 78);
    }

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowHeight;
}

export default GetWindowHeight;
