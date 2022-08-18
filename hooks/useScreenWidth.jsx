import React, { useEffect, useRef, useState } from "react";

const useScreenWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
      console.log(e.target.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return { width };
};

export default useScreenWidth;
