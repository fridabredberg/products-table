import { useEffect, useState } from "react";

const GetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(1300);

  useEffect(() => {
    function onResize() {
      setWindowWidth(window.innerWidth);
    }

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowWidth;
}

export default GetWindowWidth;
