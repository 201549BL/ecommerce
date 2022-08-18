import React, { useEffect, useState, useRef } from "react";

const defaultValues = ["hats", "shoes", "shorts", "pants"];

const CustomAutoComplete = ({ values = defaultValues, field }) => {
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const elementRef = useRef(undefined);

  console.log(selectedValue);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", onClickOutside);

    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, [elementRef]);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setQuery(value);
    setIsOpen(false);
  };

  const handleFieldChange = () => {};

  return (
    <div className="w-56 bg-slate-300" ref={elementRef}>
      <input
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        onFocus={() => setIsOpen(true)}
      ></input>
      {isOpen && (
        <div>
          {values.map((v) => (
            <p key={v} onClick={() => handleValueChange(v)}>
              {v}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomAutoComplete;
