import React from "react";

const Input = ({ value = "", onChange, name }) => {
  return (
    <div className="relative mt-4 flex items-center">
      <input
        id={name}
        className="peer h-10 flex-1 rounded p-2 placeholder:invisible"
        placeholder={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="absolute -top-6 w-auto flex-initial transform px-2 transition-all first-letter:capitalize peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500"
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
