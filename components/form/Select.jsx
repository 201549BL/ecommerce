import React, { useState } from "react";

const Select = ({ values, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(undefined);

  const filteredValues =
    query === "" ? values : values.filter((o) => o.label.includes(query));

  const optionsProp = {
    isOpen,
    value,
    query,
    setQuery,
    values: filteredValues,
  };

  const render = () => {
    return typeof children === "function" ? children(optionsProp) : children;
  };

  return (
    <div className="w-52 bg-slate-100">
      <>{render()}</>
    </div>
  );
};

const Input = ({ query, setQuery }) => {
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};

const Items = ({ children }) => {
  return <div>{children()}</div>;
};

const Item = ({ children }) => {
  return children;
};

Select.Item = Item;
Select.Items = Items;
Select.Input = Input;

export default Select;
