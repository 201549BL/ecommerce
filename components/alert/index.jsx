import React, { useRef } from "react";

const Alert = ({ children, setIsOpen }) => {
  const backdropRef = useRef(undefined);
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target === backdropRef.current) setIsOpen(false);
      }}
      className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-900/20"
      ref={backdropRef}
    >
      <div className="bg-slate-200 p-6">{children}</div>
    </div>
  );
};

export default Alert;
