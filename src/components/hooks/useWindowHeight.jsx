import { useEffect, useState } from "react";

const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = useState(900);

    useEffect(() => {
        function onResize() {
            setWindowHeight(window.innerHeight - 130);
        }

        onResize();

        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return windowHeight;
}

export default useWindowHeight;
