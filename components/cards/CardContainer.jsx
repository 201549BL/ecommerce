import React, { useRef } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

const CardContainer = ({ children }) => {
  const scrollContainerRef = useRef(undefined);
  const { width } = useScreenWidth();

  return (
    <div className=" m-auto grid max-w-5xl grid-cols-2 gap-2 p-2 md:grid-cols-3">
      {children}
    </div>
  );
};

export default CardContainer;
